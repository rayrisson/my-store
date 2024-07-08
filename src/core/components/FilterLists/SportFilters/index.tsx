import Filter from '../../Filter'

const CATEGORY_ITEMS = [
  {
    id: 'futebol',
    label: 'Futebol',
    value: 'futebol'
  },
  {
    id: 'basquete',
    label: 'Basquete',
    value: 'basquete'
  },
  {
    id: 'corrida',
    label: 'Corrida',
    value: 'corrida'
  }
]

export function SportFilters() {
  return (
    <>
      {CATEGORY_ITEMS.map((items, idx) => (
        <Filter key={idx} param='sport' {...items} />
      ))}
    </>
  )
}
