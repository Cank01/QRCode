const bcrypt=require('bcrypt')
const postAdmin={
    Admin:async (req,res)=>({
        lucyNumber:req.body.lucyNumber,
        password:await bcrypt.hash(req.body.password,10),
    }),
    Banner:(req,res)=>({
        title:req.body.title,
        description:req.body.description,
        image:req.body.image,
    }),
    ContactUs:(req,res)=>({
        phone:req.body.phone,
        address:req.body.address
    }),
    Image:(req,res)=>({
        path:req.body.path
    }),
    Orders:(req,res)=>({
        tableNumber:req.body.tableNumber,
        orderInformation:req.body.orderInformation,
        totalPrice:req.body.totalPrice,
        status:req.body.status,
        note:req.body.note
    }),
    Product:(req,res)=>({
        productType:req.body.productType,
        productCategory:req.body.productCategory,
        image:req.body.image,
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    }),
    ProductCategory:(req,res)=>({
        name:req.body.name,
        productType:req.body.productType
    }),
    ProductType:(req,res)=>({
        name:req.body.name
    }),
    QRCode:(req,res)=>({//bu kısım ilerleyen aşamalarda endpoint'ten alacak şekilde düzenlenecek
        tableNumber:req.body.tableNumber,
        webURL:req.body.webURL
    }),
    SiteInformation:(req,res)=>({
        name:req.body.name,
        image:req.body.image
    }),
    SocialMedia:(req,res)=>({
        name:req.body.name,
        image:req.body.image,
        link:req.body.link
    }),
    Thema:(req,res)=>({
        headerColor:req.body.headerColor,
        footerColor:req.body.footerColor,
        backgroundColor:req.body.backgroundColor,
        productCardColor:req.body.productCardColor,
        fontColor:req.body.fontColor,
        titleColor:req.body.titleColor,
        inputCardColor:req.body.inputCardColor,
        inputButtonColor:req.body.inputButtonColor
    })
}
module.exports={postAdmin}