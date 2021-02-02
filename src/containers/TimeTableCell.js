export default function TimeTableCell(props) {
    let dynamicCellWidth = 10 * (props.data.end - props.data.start);
    const minCellWidth = 10;
    if (dynamicCellWidth < minCellWidth) {
        dynamicCellWidth = minCellWidth;
    }

    let dynamicBackgroundColor = props.data.color;

    const dynamicStyleConfiguration = {
        width: `${dynamicCellWidth}%`,
        backgroundColor: `${dynamicBackgroundColor}`
    };

    return (
        <>
            {props.data.name && (
                <div className="time-table-cell" style={dynamicStyleConfiguration}>
                    {props.data.name}
                </div>
            )
            }
        </>
    )
}
