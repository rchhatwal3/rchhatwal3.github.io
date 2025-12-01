import React, { Component } from 'react'

export default class Workandresearch extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="workandresearch">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work, School and Research</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="workandresearch-centered">

                <article className="workandresearch-entry animate-box" data-animate-effect="fadeInRight">
                  <div className="workandresearch-entry-inner">
                    <div className="workandresearch-icon color-2">
                      <i className="icon-pen2" />
                    </div>
                    <div className="workandresearch-label">
                      <h2>JP Morgan Chase - Site Reliability Engineer III<span>Dec 2023 - Present</span></h2>
                      <div> I have been part of JP Morgan Chase since December 2023 in the Wholsale Lending space. I have been a Site Reliability Engineer III for one of the loan applicaation teams with some of my highlights below:
                        <ul>
                          <li>Maintained application SLOs above 99.8% uptime</li>
                          <li>Standardized incident management practices and built an escalation matrix to streamline response and reduce MTTR to under 30 minutes.</li>
                          <li>Led SR/DR testing to validate recovery times of ~1.5 hours, strengthening disaster recovery readiness.</li>
                          <li>Helped drive application cost reduction savings of $561K against a $608K target for 2025.</li>
                          <li>Consolidated 88 deployment pipelines into 2, cutting deployment time by 4+ hours per release.</li>
                          <li>Migrated to Dynatrace, decommissioning legacy AppDynamics/APICA monitoring.</li>
                          <li>Built unified Grafana dashboards aggregating metrics from APICA, Kafka, DB, and Kubernetes.</li>
                          <li>Implemented infrastructure automation and Just-In-Time access to reduce privileged access events from 26 per year to zero.</li>
                          <li>Improved SRE coverage from 8x5 → 16x5 through cross-training and documentation</li>
                          <li>Reduced monthly Kubernetes pod cost for key apps from $12.8K → $4.5K, increasing resource utilization from 29% → 62%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="workandresearch-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-book2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Graduated Master's program at Georgia Institute of Technology <span>Aug 2025</span></h2>
                        <p>
                          I have graduated from the Georiga Tech OMSCS program with a Master's of Science in Commputer Science specializing in Computing Systems.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Ally Financial - Site Reliability Engineer<span>June 2022 - Dec 2023</span></h2>
                        <div>I was presented an opportunity to switch to a Site Reliability Engineering team and I jumped on it. I started off working on automation and templates that could be used within the 
                          entire company and later switched to working as an SRE with a group of app teams as well as helped create an SRE learning community. These are some of my highlights:
                          <ul>
                            <li>Developed Python script to allow for automatic code deployments to reduce deployment time by ~1hr each deployment.</li>
                            <li>Developed Python script and Terraform code to template monitoring services based on industry recommendations for all application teams to use.</li>
                            <li>Pioneered a SplunkDB Connect connection with our MySQL Aurora databases to allow use to further monitor our instances using Splunk.</li>
                            <li>Update engine version and clean-up RDS instances to eliminate ~$60,000 per year in cost.</li>
                            <li>Created a monitoring framework for Snowflake errors with AWS using SNS, lambda, and Python.</li>
                            <li>Championed an enterprise-wide Site Reliability Engineering community of practice.</li>
                            <li>Created template for RDS monitoring based on DBA recommendations using terraform that all application teams can use.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                  
                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-book2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Started Master's program at Georgia Institute of Technology <span>Jan 2023</span></h2>
                        <p>
                          I have started at Georgia Institute of Technology in the OMSCS program to get my Master's of Computer Science degree.
                          I will be specializing in Computing Systems and have a planned graduation of 2026.
                        </p>
                      </div>
                    </div>
                  </article>
                  

                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Ally Financial - Bank Production Engineer<span>Jan 2022 - Jun 2022</span></h2>
                        <div>I started at Ally Financial as a production engineer in their Early Talent Program. We started off the program with a bootcamp 
                          where we had a capstone project. In that capstone, my team and I built a project management system hosted in AWS using Terraform. In the project, I:
                          <ul> 
                            <li>worked on most of the backend and Terraform</li>
                            <li>created a system design using DynamoDB, Cognito, S3, CloudFront, Lambda, and API Gateway</li>
                            <li>debugged and fixed HTTPS headers to eliminate CORS errors</li>
                          </ul>
                          <br></br>
                          Now that I am on my actual team, I have been focused on different projects relating to automation, monitoring, VOC reporting, and IAM provisioning.
                          <br></br>
                          <br></br>
                          For automation, I created an automated health check script for the databases that the deposit teams use. This is an Ansible script that will check different properties of the 
                          Oracle DBs such as TablespaceUsage and InvalidIndex.
                          <br></br>
                          <br></br>
                          For monitoring, I have worked in Datadog and Splunk to create monitors and alerts for our production instances that have moved to AWS. These alerts and monitors have been used to 
                          help triage different incidents.
                          <br></br>
                          <br></br>
                          We have a tool to collect VOCs (Voice of Customers). I inherited this code from a peer who left the company and needed to understand the code to fix what was broken. I needed to finish 
                          implementing our sentiment analysis algorithm as well as create alerts that would send emails to the correct people.
                          <br></br>
                          <br></br>
                          For IAM provisioning, I am now in charge of facilitating the provisioning of IAM roles to different app teams with their cloud applications. This involves adding their roles to our Terraform 
                          module as well as implementing the principle of least privilege. This requires strict consulting and requirements elicitation with the app teams to accurately provide the correct permissions 
                          in our production cloud environment.
                    
                        </div>
                      </div>
                    </div>
                  </article>
                  
                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="workandresearch-entry-inner">
                        <div className="workandresearch-icon color-2">
                          <i className="icon-book2" />
                        </div>
                        <div className="workandresearch-label">
                          <h2>Graduated from Clemson Unversity <span>Dec 2021</span></h2>
                          <p>After 4.5 years, I have officially become an alumni of Clemson Unversity. I have graduated with a 3.65 GPA 
                            majoring in Computer Science with a minor in Mathematical Sciences.
                          </p>
                        </div>
                      </div>
                    </article>

                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Internship at Windstream Communications <span>May 2021-Aug 2021</span></h2>
                        <div>
                          Over Summer 2021, I completed my internship at Windstream Communications in the IP Engineering department under the tools
                          and automation team. I had the opportunity to work on automation that directly helped the 
                          engineers I worked with on a daily basis, as well as a leadership project in which I was able to 
                          research and start development on automation and pitch the ideas to Windstream executives. Some of the 
                          highlights from the summer include:
                          <ul>
                            <li>Developed Python script to alert and create a JIRA ticket when a Windstream serviced market fell below an available IP threshold, eliminating the possibility of a stale market</li>
                            <li>Developed Python script to web scrape IP metrics for all Windstream markets and store in InfluxDB</li>
                            <li>Visualized overall summary and individual IP metrics for all Windstream markets using Grafana</li>
                            <li>Developed Python script to compile a list of the CIDR representation of free IP space available to be distributed to other markets</li>
                            <li>Researched and initiated automation projects that were pitched to Windstream executives to continue development on</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                  
                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Co-op at Itron, Inc. <span>Jan 2019-Aug 2020</span></h2>
                        <div>I completed my 3-semester co-op at Itron working in the Product Management Department but under the role of Networking and Product Management Engineering. Some of my highlights over the
                          3 rotations include:
                          <ul>
                            <li>Developed an integration between Amazon Alexa and Itron meters through a Raspberry Pi using Python and C as the programming languages and Zigbee and Bluetooth as the wireless protocols.</li>
                            <li>Managed all cloud devices and delegated on-site engineers to fix connectivity issues on pilot program to place ~120 Zigbee routers in homes to transmit data to cloud</li>
                            <li>Put in charge of designing and prototyping hardware to allow ConEd NY to comply with new grid safety and National Electric Code protocols; created a technical document on
                              installation, parts, and suppliers</li>
                            <li>Travelled to Canada to help analyze and fix manufacturing issues on ~140,000 new meters to be deployed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-lightbulb" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Injured Military Veteran Adaptive Sport and Paralympic Soccer Program Development <span>Jan 2018-Dec 2021</span></h2>
                        <p> I have been a part of <a href="http://clemsonparalympicsoccer.org/" target="_blank" rel="noopener noreferrer"> Clemson Paralympic Soccer </a> for most of my
                        time at Clemson, where the focus is on both introducing injured military veterans to adaptive sports as well as working directly with the US Paralympic Soccer Team.<br></br>
                        With the veterans, we are on our 5th year of a grant that provides us the ability to host 3-4 day camps throughout the year all over the nation that will bring in the veterans together.
                        In the camps, we have introduced adaptive sport to the veterans, gave them their grassroots soccer coaching license, and as of this year, mental health first aid certified as well.
                        I have participated myself in over 5 camps now helping out with the veterans as well as doing research throughout the camp to collect data surrounding best practices, program evaluation and impact to further improve the program's efforts. <br></br>I have also now received a Blaze Sports Adaptive Recreation and Sports Specialist as well as a Mental Health First Aid certification.  <br></br>
                        Another aspect of our program is directly help develop the US Paralympic Soccer Team in preparation for the 2028 Paralympic Games in Los Angeles.
                        We are working to start a paralympic soccer team here at Clemson, one of the first teams for a university.  We also work with the head coach of the US team to scout players throughout
                        the country that could be potential candidates for both the Clemson team as well as the US team.<br></br>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-book2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Switched to Computer Science <span>Aug 2019-Dec 2021</span></h2>
                        <p>I eventually made the complete major switch from Computer Engineering to Computer Science with a minor in Mathematical Sciences. I discovered through my classes and some of the projects I worked on at
                          Itron that I was more interested in working with software development for the future, and changing majors would allow me to do that.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInBottom">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-lightbulb" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Robot Control Using MATLAB <span>Aug 2017-Dec 2017</span></h2>
                        <p>This was my first Creative Inquiry class that I've taken at Clemson and my first time working on a software project with another person. In this class, we used Lego Mindstorms to create
                          our own robot and used MATLAB to design a program that will use the Lego Mindstorm sensors to complete and obstacle course. This research project introduced me to engineering and desgin principles
                          in a hands-on approach before I took the respective classes later in my curriculum.</p>
                      </div>
                    </div>
                  </article>

                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-book2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Started Undergraduate at Clemson University as Computer Engineering <span>Aug 2017-Aug 2019</span></h2>
                        <p>I started off at Clemson as a Computer Engineering major with a minor is Mathematical Sciences and Computer Science.  This is where I learned mostly about computer hardware as well as low-level
                          programming in C and Assembly. I also completed my first two rotations at Itron as a Computer Engineering Major.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-book2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Completed 45 hours of Dual Enrollment <span>August 2014-May 2017</span></h2>
                        <p>I graduated from Brashier Middle College Charter High School while completing 45 college credit hours due to dual enrollment classes.  I played varsity soccer all 4 years I was there and I graduated
                          Summa Cum Laude.
                        </p>
                      </div>
                    </div>
                  </article>


                  <article className="workandresearch-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="workandresearch-label">
                        <h2>Soccer Referee for US Soccer Federation <span>Aug 2013-Present</span></h2>
                        <p>I have been a soccer referee since I was 13 years old. Since I played soccer at the time, it made sense to me to get into refereeing as well to be part of a different aspect of the game.
                          Throughout my time as a referee, I have been in charge of player safety, enforcing the Laws of the Game, travelling across the country, as well as maintain my physical fitness to keep up with the
                          ever increasing speed of play.  I've learned many life skills from being a referee from a young age such as person management, teamwork between my referee crew, as well as confidence from having to
                          stick with my decision with at least the other team and parents disagreeing with me. </p>
                      </div>
                    </div>
                  </article>

                  <article className="workandresearch-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="workandresearch-entry-inner">
                      <div className="workandresearch-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
