import data from './data.json'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  let responseData = data

  if (searchParams.has('search')) {
    const search = decodeURI(searchParams.get('search') as string).toLowerCase()

    responseData = responseData.filter((product) =>
      product.name.toLowerCase().includes(search)
    )
  }

  if (searchParams.has('type')) {
    const type = decodeURI(searchParams.get('type') as string).split(',')

    responseData = responseData.filter((product) =>
      type.includes(product.type.toLowerCase())
    )
  }

  if (searchParams.has('sport')) {
    const sport = decodeURI(searchParams.get('sport') as string).split(',')

    responseData = responseData.filter((product) =>
      sport.includes(product.sport.toLowerCase())
    )
  }

  if (searchParams.has('orderBy')) {
    const orderByFunctionName = decodeURI(searchParams.get('orderBy') as string)

    if (orderByFunctionName === 'lowerPrice') {
      responseData = responseData.sort(
        (product1, product2) => product1.price - product2.price
      )
    }

    if (orderByFunctionName === 'higherPrice') {
      responseData = responseData.sort(
        (product1, product2) => product2.price - product1.price
      )
    }
  }

  return Response.json(responseData)
}
