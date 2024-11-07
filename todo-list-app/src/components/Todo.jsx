export default function Todo({ value }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <li>{value}</li>
      <button>Delete</button>
    </div>
  )
}
