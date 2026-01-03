import { QueryClient } from '@tanstack/react-query'

export const queryConfig = {
  queries: {
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 1,
    refetchOnWindowFocus: false,
  },
}

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
})
