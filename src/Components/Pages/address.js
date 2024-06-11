
import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'
import './Stylesheet/address.css';


const Address = () => {

    // ................ShowHide...................
    var display = 1;
    function hideShow() { 
        var div = document.getElementById('form-form');
        if (display === 0) {
            div.style.display = "block"
            div.style.marginBottom = "-6rem"
            display = 1;
        }
        else {
            div.style.display = "none"
            display = 0;
        }

    }
    var display = 0;
    function showHide() {
        var div = document.getElementById('address-con')
        if (display === 1) {
            div.style.display = "none"
            display = 0;
        }
        else {
            div.style.display = "block"
            display = 1;
        }

    }
    // ................ShowHide...................

    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [pincode, setPincode] = useState();
    const navigate = useNavigate()
    const [name, setName] = useState();
    const [eemail,setEmail] = useState();
    const [gender,setGender] = useState();


    // .....................PROFILE API'S..............................

    //......................get profile....................
    // const [profileinfo, setProfileinfo] = useState([]);
    const add_id = localStorage.getItem('add_id')
    const email= localStorage.getItem('email')
    useEffect(() => {
        getprofile();
    },[false])
    function _profile(profileinfo){
        setName(profileinfo.name);
        setEmail(profileinfo.email);    
        setGender(profileinfo.gender); 
}

    async function getprofile() {
        try {
            const response = await fetch("http://localhost:5000/getmyprofile", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email})
            })

            if (response.ok) {
                _profile(await response.json());
            }
            else {
                const error = await response.json()
                alert(error.message)
                console.log(error)
            }

        } catch (error) {
            console.log(error)
        }
    }
    // ..................get profile end....................

    // ..................set profile........................
    const handlerSubmit= async (e) =>{
        var _id=add_id;
        console.log(gender);
        e.preventDefault();
        const pro_form=({_id,name,gender})
        try {
            const response=await fetch("http://localhost:5000/setmyprofile",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(pro_form)
            })
            if(response.ok)
            {
                const data=await response.json()
                console.log(data)
                alert(data.message)
            }
            else {
                const error = await response.json()
                alert(error.message)
                console.log(error)
            }
        } catch (error) {
            console.log(error)
            
        }

    }
    // ..................set profile end....................

    // .....................PROFILE API'S END..............................




    // .....................ADDRESSS API'S..................................

    //.....................Get Address Api .......................
   
      useEffect(() => {
        getaddress();
    },[false])
    function _address(addressinfo){
        
            setAddress(addressinfo.address);
            setCity(addressinfo.city);
            setState(addressinfo.state);
            setPincode(addressinfo.pincode);
    }
    async function getaddress(){    
        try {
            const response = await fetch("http://localhost:5000/getaddress",{
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({add_id})
            })

            if (response.ok) {
    			_address(await response.json());
                
            }

            else {
                const error = await response.json()
                alert(error.message)
                console.log(error)
            }

        } catch (error) {
            console.log(error)

        }
    }
    // ...................Get Address Api end ...................

    // ...................set Adress Api ........................
    const handlerChange = async (e) => {
        e.preventDefault();
        var address_form = ({ add_id,address, city, state, pincode})
        try {
            const response = await fetch("http://localhost:5000/setaddresses", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(address_form)
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                alert(data.message)
            }
            else {
                const error = await response.json()
                alert(error.message)
                console.log(error)
            }

        } catch (error) {
            console.log(error)

        }
    }
    // ...................set Adress Api end.....................

    // .....................ADDRESSS API'S END...............................


    return (
        <>
            <div className="container-fluid  main-section">
                <div className="row">
                    <div className="col-md-12 mt-3 chaild-section">
                        <span>Home</span>
                        <span>/</span>
                        <span> My Address</span>
                    </div>
                </div>
            </div>

            {/* .....................manage profile section............. */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 manage-pro" id='form-form' >
                        <div className="main-heading-6">
                            <h6>MANAGE PROFILE </h6>
                        </div>
                        <form onSubmit={handlerSubmit}>
                            <label htmlFor="">Name</label><br />
                            <input type="text" id='inp' name='name' value={name} onChange={(e) => setName(e.target.value)}/><br/>
                            <label htmlFor="" >Email</label><br />
                            <input type="email"  name='eemail' value={eemail} onChange={(e) => setEmail(e.target.value)}/><br/>
                            <label name="gender" value={gender} >Gender</label><br />
                            <label>Male <input type="radio" value="male" onChange={(e) => setGender(e.target.value)} name='gender'/>
                            </label>
                            <label>Female <input type="radio" value="female" onChange={(e) => setGender(e.target.value)} name='gender'/>
                            </label><br />
                            <input type="checkbox" /> <span>set as Default Address?</span><br />
                            <button> UPDATE PROFILE</button>
                            <button type='reset'>CANCLE</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* .....................manage profile section end............. */}


            {/* .....................edit profile section............. */}
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-5 edit-profile-section">
                        <div className="row">
                            <div className="col-md-1 profile-account">
                                <div className='user-icon'>
                                    <span><i className="fa fa-user"></i></span>
                                </div>
                            </div>
                            <div className="col-md-10 profile-account">
                                <div className='user-detail'>
                                    <span>{name}</span>
                                     <span>{email}</span>
                                </div>
                                <div className='user-edit'>
                                    <button id='btn' onClick={hideShow}>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                        <p>{address}</p>
                        <div className="btn btn-light" onClick={showHide}>
                            MANAGER ADDRESS
                        </div>
                    </div>
                </div>
            </div>
            {/* .....................edit profile section end............. */}


            {/* .....................manage address section............. */}
            <div className="address-con" id='address-con'>
                <div className="row">
                    <div className="col-md-12 add-row">
                        <div className="add-heading">
                            <h6>MANAGE ADDRESS </h6>
                        </div>
                        <div className="col-12 add-form-section" >
                            <form className='form-form' onSubmit={handlerChange}>
                                <label htmlFor="">Address</label><br />
                                <input type="text" name='address'  value={address} onChange={(e) => setAddress(e.target.value)} required /><br />
                                <label htmlFor="">City</label><br />
                                <input type="text" name='city' value={city} onChange={(e) => setCity(e.target.value)} required /><br />
                                <label htmlFor="">State</label><br />
                                <input type="text" name='state'  value={state} onChange={(e) => setState(e.target.value)} required /><br />
                                <label htmlFor="">Pincode</label><br />
                                <input type="text" name='pincode'  value={pincode} onChange={(e) => setPincode(e.target.value)} required /><br />
                                {/* <label htmlFor="">Phone</label><br />
                                    <input type="text" name='phone' onChange={(e) => setPhone(e.target.value)} required /><br /> */}
                                <button> UPDATE ADDRESS</button>
                                <button type='reset'> CANCLE</button>
                                <p></p>
                            </form>
                            <input type="checkbox" /> <span >set as Default Address?</span><br />
                        </div>
                    </div>
                </div>
            </div>
            {/* .....................manage address section end............. */}

        </>
    )
}

export default Address
