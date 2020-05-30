import React from "react";
import sandeep from "../../assets/img/team/sandeep.jpg";
import praveen from "../../assets/img/team/praveen.jpg";
import jeet from "../../assets/img/team/jeet.jpg";
import rishabh from "../../assets/img/team/rishabh.jpg";
import kartik from "../../assets/img/team/kartik.jpg";
import om from "../../assets/img/team/om.jpg";
import harpreet from "../../assets/img/team/harpreet.jpg";
import pratiksha from "../../assets/img/team/pratiksha.jpg";
import naaz from "../../assets/img/team/naaz.jpg";
import parth from "../../assets/img/team/parth.jpg";
import kunal from "../../assets/img/team/kunal.jpg";
import harsh from "../../assets/img/team/harsh.jpg";
import anmol from "../../assets/img/team/anmol.jpg";
import vikas from "../../assets/img/team/vikas.jpg";
import neelam from "../../assets/img/team/neelam.jpg";
import shilpa from "../../assets/img/team/shilpa.jpg";
import ayurdha from "../../assets/img/team/ayurdha.jpg";
import siddharth from "../../assets/img/team/siddharth.jpg";
import kashyap from "../../assets/img/team/kashyap.jpg";




export default class TeamList extends React.Component{
    constructor() {
        super();
        this.state = {
            isToggleOn: false,
            show: false,
            showme: true,
            team: [
                {
                    name:"Sandeep Thakur",
                    position:"CEO",
                    image:sandeep,
                    linkedin:"https://www.linkedin.com/in/sandeepthakur112/",
                    instagram:"https://www.instagram.com/thakur_amorous/"
                },
                {
                    name:"Praveen Agrawal",
                    position:"CTO",
                    image:praveen,
                    linkedin:"https://www.linkedin.com/mwlite/in/praveen-agrawal-6b3b0b142   ",
                    instagram:"https://www.instagram.com/praveenhbnsh "
                },
                {
                    name:"Siddharth Arora",
                    position:"Web Developer",
                    image:siddharth,
                    linkedin:"https://www.linkedin.com/in/siddharth-arora-8119b6150/",
                    instagram:"https://www.instagram.com/sidd.hearrt/"
                },
                {
                    name:"Ayurdha Gupta",
                    position:"Finance",
                    image:ayurdha,
                    linkedin:"https://www.linkedin.com/in/ayurdha-gupta-933450139",
                    instagram:"#"
                },
                {
                    name:"Shilpa",
                    position:"HR",
                    image:shilpa,
                    linkedin:"https://www.linkedin.com/in/shilpa-sharma-34b571179",
                    instagram:"https://www.instagram.com/_shilpasharma/"
                },
                {
                    name:"Neelam Rani",
                    position:"HR Manager",
                    image:neelam,
                    linkedin:"https://www.linkedin.com/in/neelam-rani-732709171",
                    instagram:"#"
                },
                {
                    name:"Vikas",
                    position:"Web Developer",
                    image:vikas,
                    linkedin:"#",
                    instagram:"https://instagram.com/kaizen_._"
                },
                {
                    name:"Anmol Sharma",
                    position:"Marketing",
                    image:anmol,
                    linkedin:"https://www.linkedin.com/in/anmol-sharma-b8a642150",
                    instagram:"https://www.instagram.com/anmolsharma_02"
                },
                {
                    name:"Harsh Badhai",
                    position:"Product Designer",
                    image:harsh,
                    linkedin:"https://www.linkedin.com/in/harsh-badhai-a9bb99183",
                    instagram:"https://www.instagram.com/frames_by._harsh/"
                },
                {
                    name:"Kunal Garg",
                    position:"Web Developer",
                    image:kunal,
                    linkedin:"https://www.linkedin.com/in/kunal-garg-0b199517a/",
                    instagram:"https://www.instagram.com/kunal_g_29"
                },
                {
                    name:"Kartik Malviya",
                    position:"UX Designer",
                    image:kartik,
                    linkedin:"https://www.linkedin.com/in/kartik-malviya-85146a191",
                    instagram:"https://www.instagram.com/music.kartik/"
                },
                {
                    name:"Kashyap",
                    position:"App Developer",
                    image:kashyap,
                    linkedin:"https://www.linkedin.com/in/kashyap-goutam-592460199",
                    instagram:"http://Instagram.com/kashyap_193"
                },
                {
                    name:"Jeet",
                    position:"Management",
                    image:jeet,
                    linkedin:"https://www.linkedin.com/in/jeet-yadav-41a073175/",
                    instagram:"https://www.instagram.com/jeet.yadav11/?hl=en"
                },
                {
                    name:"Rishabh Vatsa",
                    position:"Marketing",
                    image:rishabh,
                    linkedin:"https://www.linkedin.com/in/rishabh-vatsa-38584a167",
                    instagram:"https://instagram.com/vatsarishabh22?igshid=14kxrjrx4vexh"
                },
                {
                    name:"Parth",
                    position:"Management ",
                    image:parth,
                    linkedin:"https://www.linkedin.com/in/parthshinh",
                    instagram:"https://www.instagram.com/in/parth_shinh"
                },
                {
                    name:"Naaz",
                    position:"Publicity",
                    image:naaz,
                    linkedin:"https://www.linkedin.com/in/naaz-kakria-b63a30193",
                    instagram:"https://instagram.com/naazk2001?igshid=mtpm0oap8zyw"
                },
                {
                    name:"Pratiksha Sharma",
                    position:"Content Writing",
                    image:pratiksha,
                    linkedin:"https://www.linkedin.com/in/pratiksha-sharma-053829185/",
                    instagram:"https://www.instagram.com/pr_tiksh_/?hl=en"
                },
                {
                    name:"Harpreet Kaur",
                    position:"Marketing",
                    image:harpreet,
                    linkedin:"https://www.linkedin.com/in/harpreet-kaur-a27b6b146",
                    instagram:"https://www.instagram.com/preet_hkaur18/"
                },
                {
                    name:"Om Satya",
                    position:"Management",
                    image:om,
                    linkedin:"#",
                    instagram:"https://www.instagram.com/omsatyaswaroop/?igshid=18aysti22nkj6"
                },
                
            ]
        }
    }
    render(){
        return(
            <div className="row" data-aos="fade-left">
            {this.state.team.map((team, key) =>
              <div className="col-lg-3 col-md-6 mb-5">
            <div className="member" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src={team.image} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>{team.name}</h4>
                <span>{team.position}</span>
                <div className="social">
                  <a href={team.instagram}><i className="icofont-instagram"></i></a>
                  <a href={team.linkedin}><i className="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
        )}
}