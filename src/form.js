import React, { useState } from 'react'
import {
    Card, Button, CardTitle, CardBody,
} from 'reactstrap';

export default function Form() {
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [skill, setSkill] = useState("")
    const [proficiancy, setProficiancy] = useState("")
  
    const handleClick = () => {
        localStorage.removeItem("data");
        const userData = {
            fname,
            lname,
            skill,
            proficiancy
        }
        console.log("sss", userData)
        localStorage.setItem("data", JSON.stringify(userData));
        window.location.reload()


    }

    var dataa = JSON.parse(localStorage.getItem("data"));
    console.log("data", dataa)


    return (
        <div>
            <Card style={{ maxWidth: "800px", margin: "50px 400px", padding: "50px" }}>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="fname" value={fname} onChange={(e) => setfname(e.target.value)} type="text" className="validate" />
                                <label htmlFor="fname">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="lname" value={lname} onChange={(e) => setlname(e.target.value)} type="text" className="validate" />
                                <label htmlFor="lname">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="skill" value={skill} onChange={(e) => setSkill(e.target.value)} type="text" className="validate" />
                                <label htmlFor="skill">Skills</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="proficiancy" type="text" value={proficiancy} onChange={(e) => setProficiancy(e.target.value)} className="validate" />
                                <label htmlFor="proficiancy">Proficiancy</label>
                            </div>
                        </div>
                        <div style={{ alignContent: "center !important" }}>
                            <Button onClick={handleClick} color="primary">Save</Button>
                        </div>
                    </form>
                </div>
            </Card>
            <Card style={{ maxWidth: "800px", margin: "30px 400px", padding: "50px" }}>
                <CardBody>
                            <CardTitle>{"Hello "}<b>{dataa.fname}{" "}{dataa.lname}</b>{" How are you? your Skills are "}<b> {dataa.skill}</b>{" and you are "}<b>{dataa.proficiancy}</b> </CardTitle>
                </CardBody>
            </Card>

        </div>
    )
}
