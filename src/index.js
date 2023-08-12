
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    for (let i in matrix) {
        for (let j = 0, k = (matrix[i].length - 1); j < matrix[i].length; j++, k--) {
            if (i % 2 != 0) {
                res.push(matrix[i][k]);
            } else {
                res.push(matrix[i][j]);
            }
        }
    }
    return res;
}
