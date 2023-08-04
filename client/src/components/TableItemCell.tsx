
interface TableItemCellProps {
    children: any,
    haveBigItem?: boolean,
}

const TableItemCell: React.FC<TableItemCellProps> = ({
    children,
    haveBigItem,
}) => {

  const cl = 'notesTableCell' + (haveBigItem ? ' bigItem' : '');

  return (
    <div className={cl}>
        {children}
    </div>
  );
}
  
  
export default TableItemCell;
