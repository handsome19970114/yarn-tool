<script>
const tableData = [
    { name: 'YY', value: '18', description: '年，两位数' },
    { name: 'YYYY', value: '2018', description: '年，四位数' },
    { name: 'M', value: '1-12', description: '月，从1开始' },
    { name: 'MM', value: '01-12', description: '月，两位数' },
    { name: 'MMM', value: 'Jan-Dec', description: '月，英文缩写' },
    { name: 'MMMM', value: 'January-December', description: '月，英文全称' },
    { name: 'D', value: '1-31', description: '日' },
    { name: 'DD', value: '01-31', description: '日，两位数' },
    { name: 'd', value: '0-6', description: '一周中的一天，星期天是 0' },
    { name: 'dd', value: 'Su-Sa', description: '最简写的星期几' },
    { name: 'ddd', value: 'Sun-Sat', description: '简写的星期几' },
    { name: 'dddd', value: 'Sunday-Saturday', description: '星期几，英文全称' },
    { name: 'H', value: '0-23', description: '小时' },
    { name: 'HH', value: '00-23', description: '小时，两位数' },
    { name: 'h', value: '1-12', description: '小时, 12 小时制' },
    { name: 'hh', value: '01-12', description: '小时, 12 小时制, 两位数' },
    { name: 'm', value: '0-59', description: '分钟' },
    { name: 'mm', value: '00-59', description: '分钟，两位数' },
    { name: 's', value: '0-59', description: '秒' },
    { name: 'ss', value: '00-59', description: '秒，两位数' },
    { name: 'S', value: '0-9', description: '毫秒（十），一位数' },
    { name: 'SS', value: '00-99', description: '毫秒（百），两位数' },
    { name: 'SSS', value: '000-999', description: '毫秒，三位数' },
    { name: 'Z', value: '-05:00', description: 'UTC 的偏移量，±HH:mm' },
    { name: 'ZZ', value: '-0500', description: 'UTC 的偏移量，±HHmm' },
    { name: 'A', value: 'AM / PM', description: '上/下午，大写' },
    { name: 'a', value: 'am / pm', description: '上/下午，小写' },
    { name: 'Do', value: '1st... 31st', description: '月份的日期与序号' },
]
export default {

    render() {
        return (
            <el-table data={tableData} border>
                <el-table-column prop="name" label="标识"></el-table-column>
                <el-table-column prop="value" label="示例"></el-table-column>
                <el-table-column prop="description" label="描述"></el-table-column>
            </el-table>
        )
    }
}
</script>

<style lang="scss" scoped></style>