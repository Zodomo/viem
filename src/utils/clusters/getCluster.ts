/**
 * @description Resolves a Cluster name to all addresses in the Cluster (if any)
 *
 * @example
 * getCluster('clusters')
 * [0x00000000000e1a99dddd5610111884278bdbda1d, 0x5755d1dcea21caa687339c305d143e6e78f96adf]
 */
export async function getCluster(cluster: string): Promise<string[]> {
  try {
    const response = await fetch(
      `https://api.clusters.xyz/v0.1/cluster/${cluster}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    // Extract addresses from the wallets array
    const addresses = data.wallets.map((wallet: { address: string }) => wallet.address)
    
    // Sort addresses in alphanumeric ascending order
    return addresses.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  } catch (error) {
    console.error("There was a problem fetching the address:", error)
    throw error
  }
}
