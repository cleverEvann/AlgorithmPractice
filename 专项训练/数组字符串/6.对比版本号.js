function version_compare(v1, v2) {
    if(v1===null){
        return -1
    }
    //将两个版本号拆成数组
    let arr1 = String(v1).split('.'),
        arr2 = String(v2).split('.');
    let minLength=Math.min(arr1.length,arr2.length);
    //依次比较版本号每一位大小
    for (let i = 0; i < minLength; i++) {
        if (parseInt(arr1[i]) != parseInt(arr2[i])) {
            return (parseInt(arr1[i]) > parseInt(arr2[i])) ? 1 : -1;
        }
    }
    // 若前几位分隔相同，则按分隔数比较。
    if (arr1.length == arr2.length) {
        return 0;
    } else {
        return (arr1.length > arr2.length) ? 1 : -1;
    }
}
console.log(version_compare('1.1.9','1.2.0')); 