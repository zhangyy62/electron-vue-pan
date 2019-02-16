class MainContentController {

    computeRows(datas: Array<object>) {
        let width = document.body.offsetWidth - 200;
        let rowFiles = Math.floor(width / 128);
        let rowCount = Math.floor(datas.length / rowFiles);

        let rowsDatas = [], rowData = [], count = 0, row = 0;
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

export default new MainContentController;
