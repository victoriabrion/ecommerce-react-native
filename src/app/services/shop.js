import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://react-native-9d378-default-rtdb.firebaseio.com/"}),
    endpoints: (builder) => ({
        getProductsByCategory: builder.query ({
            query: (category)=> `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const data = Object.values(response)
                return data
            }
        }),
        getCategories: builder.query ({
            query: () => '/categories.json'
        }),
        getProduct: builder.query ({
            query: (id) => `/products/${id}.json`
        })
    })
})

export const { useGetProductsByCategoryQuery, useGetCategoriesQuery, useGetProductQuery } = shopApi