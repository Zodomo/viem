/**
 * @description Resolves an address to a Cluster name (if any)
 *
 * @example
 * getClusterName('0x00000000000e1a99dddd5610111884278bdbda1d')
 * 'clusters/protocol'
 */
export async function getClusterName(address: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.clusters.xyz/v0.1/name/${address}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.text()
    return data
  } catch (error) {
    console.error("There was a problem fetching the name:", error)
    throw error
  }
}
