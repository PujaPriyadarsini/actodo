
function TodoList(props)
{
 const activityArr= props.activityArr
 const setActivityArr= props.setActivityArr

 
function handleDelete(deleteid){
    var temparr= activityArr.filter(function(item){
        if(item.id===deleteid){
            return false
        }else{
            return true
        }
    })
    
    setActivityArr(temparr)
    }
    


return(

    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">

        <h1 className="text-2x1 font-medium">Today's Activity</h1>

        {activityArr.length===0?<p>you haven't added any activity yet</p>:""}
        {
            activityArr.map(function(item,index){
                return (
                <div className="flex justify-between">
                    <p>{index+1}.{item.activity}</p>
                    <button className="text-red-500" onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                    )
                
            })
        }

    </div>
)
}



export default TodoList