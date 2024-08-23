import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICurrency} from "../models/ICurrency.ts";


export const currencyApi = createApi({
	reducerPath: 'currencyApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
	}),
	endpoints: (build) => ({
		fetchAllCurrencies: build.query<ICurrency[], number>({
			query: () => ({
				url: '/currencies',
			})
		})
	})
})
