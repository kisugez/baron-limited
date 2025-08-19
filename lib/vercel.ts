const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID

async function vercelFetch(path: string) {
  const res = await fetch(`https://api.vercel.com${path}`, {
    headers: { Authorization: `Bearer ${VERCEL_API_TOKEN}` },
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('Vercel API error')
  return res.json()
}

export const getProject = () => vercelFetch(`/v9/projects/${VERCEL_PROJECT_ID}`)
export const getDeployments = () => vercelFetch(`/v6/deployments?projectId=${VERCEL_PROJECT_ID}`)
export const getAnalytics = () => vercelFetch(`/v2/analytics/queries/edge-requests?projectId=${VERCEL_PROJECT_ID}`)
export const getSpeedInsights = () => vercelFetch(`/v1/projects/${VERCEL_PROJECT_ID}/insights`)
export const getLogs = () => vercelFetch(`/v2/projects/${VERCEL_PROJECT_ID}/logs`)
export const getObservability = () => vercelFetch(`/v1/projects/${VERCEL_PROJECT_ID}/observability`)
export const getFirewall = () => vercelFetch(`/v1/projects/${VERCEL_PROJECT_ID}/firewall`)
export const getStorage = () => vercelFetch(`/v1/projects/${VERCEL_PROJECT_ID}/storage`)
export const getFlags = () => vercelFetch(`/v1/projects/${VERCEL_PROJECT_ID}/flags`)
export const getSettings = () => vercelFetch(`/v9/projects/${VERCEL_PROJECT_ID}/env`)
