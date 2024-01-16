const client=require('../DB/pgres.js');


const getUser=(req,res)=>{
    client.query(`SELECT * FROM PRODUCT_TABLE;`,(err,result)=>{
        if(err){
            console.log(err);
            res.status(200).json({message:`Error ${err}`});
                return;
        }
        res.status(200).json(result.rows);
    })
}


const getSpecifier=(req,res)=>{
    const {id}=req.params;
    client.query(`SELECT * FROM PRODUCT_TABLE WHERE id=$1;`, [id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(200).json({message:`Error ${err}`});
            return ;
                }
                res.status(200).json(result.rows);
    })
}

const postUser=(req,res)=>{
    const{product_name, product_price}=req.body;
    client.query(`INSERT INTO PRODUCT_TABLE (product_name,product_price) VALUES ($1, $2);`,[product_name,product_price],(err,result)=>{
        if(err){
            console.log(err);
            res.status(200).json({message:`Error ${err}`});
            return;
        }
        res.ststus(200).json(result.rows);
    })
}

const patchUser=(req,res)=>{
    const{id}=req.params;
    const {product_name, product_price}=req.body;
    client.query(`UPDATE PRODUCT_TABLE SET product_name=$1, product_price=$2 WHERE id=$3;`, [product_name,product_price,id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(200).json({message:`Error ${err}`});
            return;
        }
        res.status(200).json(result.rows);
    })
}

const deleteUser=(req,res)=>{
    const{id}=req.params;
    client.query(`DELETE FROM PRODUCT_TABLE WHERE id=$1;` ,[id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(200).json({message:`Error ${err}`});
            return;
        }
        res.status(200).json(result.rows);
    })
}


module.exports={getUser,getSpecifier,postUser,patchUser,deleteUser};
