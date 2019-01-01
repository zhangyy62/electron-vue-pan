class mainContentController {

    computeRows(datas) {
        let width = document.body.offsetWidth - 200;
        let rowFiles = Math.floor(width % 128);
        let rowCount = Math.floor(datas.length / rowFiles);

        let rowsDatas = [], rowData = [], count = 0, row = 0;
        datas.forEach(data => {
            if (row <= rowFiles){
                rowData.push(data);
                row++;
            } else if (count <= rowCount) {
                rowsDatas.push(rowData);
                rowData = [];
                count++;
                row = 0;
            }
        });
        rowsDatas.push(rowData);
        return rowsDatas;
    }
}

export default new mainContentController();