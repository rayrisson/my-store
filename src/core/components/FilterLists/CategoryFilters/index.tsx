import Filter from '../../Filter'

const CATEGORY_ITEMS = [
  {
    id: 'camiseta',
    label: 'Camiseta',
    value: 'camiseta'
  },
  {
    id: 'regata',
    label: 'Regata',
    value: 'regata'
  },
  {
    id: 'calção',
    label: 'Calção',
    value: 'calção'
  },
  {
    id: 'acessório',
    label: 'Acessório',
    value: 'acessório'
  }
]

export function CategoryFilters() {
  return (
    <>
      {CATEGORY_ITEMS.map((items, idx) => (
        <Filter key={idx} param='type' {...items} />
      ))}
    </>
  )
}
