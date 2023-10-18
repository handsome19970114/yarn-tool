<script>
import { read, utils } from "xlsx";
import xlsxFile from "./process.xlsx";
export default {
    render() {
        return <div>hello world</div>;
    },
    async mounted() {
        this.parseXlsxFile();
    },
    methods: {
        async parseXlsxFile() {
            const response = await fetch(xlsxFile);
            const arrayBuffer = await response.arrayBuffer();
            const data = new Uint8Array(arrayBuffer);
            const workbook = read(data, { type: "array" });
            const sheetNameList = workbook.SheetNames;
            const jsonData = utils.sheet_to_json(
                workbook.Sheets[sheetNameList[0]],
                { header: 1 }
            );
        },
    },
};
</script>