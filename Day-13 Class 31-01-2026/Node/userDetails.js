const users=[
    {name:"ravi",gender:"male",email:"ravi@gmail.com"},
    {name:"rani",gender:"female",email:"rani@gmail.com"},
    {name:"raju",gender:"male",email:"ravi@gmail.com"},
    {name:"ramu",gender:"male",email:"ravi@gmail.com"},
    {name:"ram",gender:"male",email:"ravi@gmail.com"},
    {name:"sai",gender:"male",email:"ravi@gmail.com"},
]

const displayUserDetails=()=>{
    users.map((user)=>{
        console.log(user);
    })
}


module.exports=displayUserDetails;