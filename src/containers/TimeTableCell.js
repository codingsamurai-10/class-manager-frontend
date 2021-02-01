export default function TimeTableCell(props) {
    return (
        <div className="time-table-cell" style={
            {
                width: `${(100/(17 - 8)) * (props.data.end - props.data.start)}%`,
                backgroundColor: `${"#" + ((1<<24)*Math.random() | 0).toString(16)}` // TODO: remove random colors, provide same color to same subjects
            }
            }>
            {props.data.name}
        </div>
    )
}
