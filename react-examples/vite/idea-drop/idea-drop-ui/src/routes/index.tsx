import { createFileRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();


export const Route = createFileRoute('/')({ component: App })

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
    <> My app
    </></QueryClientProvider>
  )
}
