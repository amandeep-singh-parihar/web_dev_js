const student={
    name:"aman",
    age:20,
    maths: 100,
    eng: 95,
    sst: 99,
    getAvg()
    {   
        //eng , maths, sst can't directly acces the parameters
        let avg=(this.maths+this.eng+this.sst)/3;
        console.log(avg);
    }
}