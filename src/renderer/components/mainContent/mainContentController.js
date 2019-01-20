class MainContentController {
    static computeRows(datas) {
        const width = document.body.offsetWidth - 200;
        const rowFiles = Math.floor(width / 128);
        const rowCount = Math.floor(datas.length / rowFiles);
        const rowsDatas = [];
        let rowData = [];
        let count = 0;
        let row = 0;
        datas.forEach(data => {
            let innerData = data;
            innerData = Object.assign({}, innerData, { isChecked: false });
            if (row <= rowFiles) {
                rowData.push(innerData);
                row += 1;
            } else if (count <= rowCount) {
                rowsDatas.push(rowData);
                rowData = [];
                count += 1;
                row = 0;
            }
        });
        rowsDatas.push(rowData);
        return rowsDatas;
    }
}

export default MainContentController;
