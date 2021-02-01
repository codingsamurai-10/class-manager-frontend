export default function TimeTableCell(props) {
    let dynamicCellWidth = 10 * (props.data.end - props.data.start);
    const minCellWidth = 10;
    if(dynamicCellWidth < minCellWidth) {
        dynamicCellWidth = minCellWidth;
    }

    const dynamicStyleConfiguration = {
        width: `${dynamicCellWidth}%`,
        // TODO: remove random colors, provide same color to same subjects
        backgroundColor: `${"#" + ((1<<24)*Math.random() | 0).toString(16)}`
    };

    return (
        <div className="time-table-cell" style={dynamicStyleConfiguration}>
                {props.data.name}
        </div>
    )
}
