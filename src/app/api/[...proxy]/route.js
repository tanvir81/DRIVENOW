import { proxyRequest } from '@/lib/proxy';

async function handler(request, { params }) {
  const pathParams = await params;
  return proxyRequest(request, pathParams);
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
