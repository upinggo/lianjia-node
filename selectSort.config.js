module.exports={
    //总价排序
    price:1,
    //房屋信息是否拆分
    info:process.env.info==='0'?0:1,
    //全部
    all:process.env.all==='0'?0:1
}
console.log(process.env)