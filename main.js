const groupByLength = (...stringArr) => {
    const output = {}
    const lengthArr = stringArr.map(string => {
        return string.length
    })
    const newLengthArr = [...new Set(lengthArr)].sort()
    newLengthArr.forEach(item => {
        output[item] = stringArr.filter(string => string.length === item)
    })
    console.log(output)
}
groupByLength('one', 'two', 'three', 'four', 'five')