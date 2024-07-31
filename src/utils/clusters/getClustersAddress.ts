/**
 * @description Resolves a Cluster name to an address (if any)
 *
 * @example
 * getClustersAddress('clusters/protocol')
 * '0x00000000000e1a99dddd5610111884278bdbda1d'
 */
export async function getClustersAddress(name: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.clusters.xyz/v0.1/address/${name}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.name
  } catch (error) {
    console.error("There was a problem fetching the address:", error)
    throw error
  }
}
