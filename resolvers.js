import  dbModel from'./model/dbModel.js'
const resolvers = {

    Query:{
        hello:()=>{
            return 'Hello World';
        },
        getAllData:async()=>{
            const result = await dbModel.find()
            return result
        },
        getDataById:async(parent,args,context,info)=>{
            
           const {id} = args;
          return await dbModel.findById(id);
        }
    },
    Mutation:{
        createDetail:async(parent,args,context,info)=>{
            const {name,place,age}= args.Data
            const result =new dbModel({name,place,age})
            await result.save();
            return result;

        },
        deleteData:async(parent,args,context,info)=>{
            const { id } = args
            await dbModel.findByIdAndDelete(id)
            return "Ok Data is deleted.."
        },
        updateData:async(parent,args,context,info)=>{
            const {id} = args
            const{name,place,age}=args.data
            const update={}
            if(name !== undefined){
                update.name= name
            }
            if(place !== undefined){
                update.place= place
            }
            if(age !== undefined){
                update.age= age
            }
            const detail = await dbModel.findByIdAndUpdate(id,
                update,
                {new:true}
                );

            return detail;

        } ,
    } 
}

export default resolvers