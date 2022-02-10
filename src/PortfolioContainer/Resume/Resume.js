import React, { Component, createRef } from 'react';
import './Resume.css';

export default class Resume extends Component {

  scrollDiv = createRef();

  educationRef = createRef();
  workHistoryRef = createRef();
  projectsRef = createRef();
  programmingSkillsRef = createRef();
  interestsRef = createRef();

  scrollSmoothHandler = (scrollDiv) => {
    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  

  render() {
    return (
      <div className="resume-container">
        <div className="resume-content">
          <div className="resume-header">RESUME</div>
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="resume-bullets-container">
                <div className="bullets-icons"></div>
                <div className="bullets">
                  <div
                    className="bullet"
                    tabindex="1"
                    onClick={() => this.scrollSmoothHandler(this.educationRef)}
                  >
                    <img
                      className="bullet-logo"
                      src={
                        require("../../assets//Resume/education.svg").default
                      }
                      alt="B"
                    />
                    <span> Education</span>
                  </div>
                  <div
                    className="bullet"
                    tabindex="2"
                    onClick={() =>
                      this.scrollSmoothHandler(this.workHistoryRef)
                    }
                  >
                    <img
                      className="bullet-logo"
                      src={
                        require("../../assets//Resume/work-history.svg").default
                      }
                      alt="B"
                    />
                    <span> Work History</span>
                  </div>
                  <div
                    className="bullet"
                    tabindex="3"
                    onClick={() => this.scrollSmoothHandler(this.projectsRef)}
                  >
                    <img
                      className="bullet-logo"
                      src={require("../../assets//Resume/projects.svg").default}
                      alt="B"
                    />
                    <span> Projects</span>
                  </div>
                  <div
                    className="bullet"
                    tabindex="4"
                    onClick={() =>
                      this.scrollSmoothHandler(this.programmingSkillsRef)
                    }
                  >
                    <img
                      className="bullet-logo"
                      src={
                        require("../../assets//Resume/programming-skills.svg")
                          .default
                      }
                      alt="B"
                    />
                    <span> Programmin Skills</span>
                  </div>
                  <div
                    className="bullet"
                    tabindex="4"
                    onClick={() => this.scrollSmoothHandler(this.interestsRef)}
                  >
                    <img
                      className="bullet-logo"
                      src={
                        require("../../assets//Resume/interests.svg").default
                      }
                      alt="B"
                    />
                    <span> Interests</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-bullets-details">
              <div ref={this.educationRef}>
                <br />
                EDUCATION Lorem ipsum dolor sit amet. Nam enim consequatur ab
                voluptatem corporis sed possimus dolorem et quasi vitae hic
                reprehenderit neque! Et corporis maxime sed molestiae voluptatem
                ut consequuntur magnam. Sit ipsam accusamus hic debitis sunt eos
                voluptatem minima eum nobis odio. Eum nesciunt numquam eos fugit
                distinctio et eius molestiae aut tempora illum ut earum minima.
                Et incidunt assumenda et veniam omnis in minima provident et
                velit delectus eos molestiae dolorem aut nesciunt enim aut rerum
                neque. Et quod saepe et quia tempora aut voluptas eligendi et
                consequatur sunt non molestias sapiente. Et mollitia tempore qui
                blanditiis quisquam et necessitatibus adipisci et deleniti sunt
                sed quod impedit ab optio omnis.
              </div>

              <div ref={this.workHistoryRef}>
                <br />
                HISTORY Aut quibusdam nisi et veritatis rerum Quis quae quo
                fugit pariatur! Aut repellat soluta et tenetur impedit ut quos
                eligendi vel sint officiis? Tenetur iste eum iste internos ut
                recusandae animi rem molestias omnis. Est tenetur cumque et quia
                repellendus ut accusantium necessitatibus. Et voluptatem iusto
                sit nesciunt sapiente qui atque omnis qui accusantium quos ad
                galisum dolorum quo internos voluptates ut quos dignissimos. A
                modi nihil eos explicabo voluptatum ut ullam nihil? Aut vitae
                fugit qui autem voluptatum sit dolores ducimus in laudantium
                voluptatibus. Ex pariatur adipisci aut similique nemo ex omnis
                consequatur aut vitae quos est galisum dolorum? Sed galisum
                consequatur ut sapiente dolorum aut accusantium alias ut quas
                quasi et doloribus illum.
              </div>

              <div ref={this.projectsRef}>
                <br />
                PROJECTS Eos molestiae consectetur quaerat consequuntur et eaque
                accusantium ut sint sunt. Ut quaerat nihil quo beatae
                consectetur non voluptas quia sit vero velit est fuga accusamus!
                Non libero nihil qui dolore ipsum vel quia tempora. Id eveniet
                vitae hic sint dolorem ad voluptas expedita ut corporis neque
                sed quisquam amet cum quisquam dolores ut iusto quaerat. Ad
                animi tempora quo laborum ipsa cum omnis quos sit repudiandae
                omnis aut pariatur repellat. Aut aperiam pariatur est mollitia
                Quis aut error nisi qui sapiente modi cum veritatis neque qui
                perspiciatis blanditiis? Vel nisi nihil qui accusamus veniam sed
                incidunt consequatur et doloremque dolorem sit impedit
                cupiditate id sunt maiores? Qui voluptas harum At voluptas autem
                in quasi sunt! In minus saepe et velit accusantium eum omnis
                aspernatur qui velit corporis aut corporis voluptatem.{" "}
              </div>

              <div ref={this.programmingSkillsRef}>
                <br />
                PROGRAMMINGSKILLS Lorem ipsum dolor sit amet. Nam enim
                consequatur ab voluptatem corporis sed possimus dolorem et quasi
                vitae hic reprehenderit neque! Et corporis maxime sed molestiae
                voluptatem ut consequuntur magnam. Sit ipsam accusamus hic
                debitis sunt eos voluptatem minima eum nobis odio. Eum nesciunt
                numquam eos fugit distinctio et eius molestiae aut tempora illum
                ut earum minima. Et incidunt assumenda et veniam omnis in minima
                provident et velit delectus eos molestiae dolorem aut nesciunt
                enim aut rerum neque. Et quod saepe et quia tempora aut voluptas
                eligendi et consequatur sunt non molestias sapiente. Et mollitia
                tempore qui blanditiis quisquam et necessitatibus adipisci et
                deleniti sunt sed quod impedit ab optio omnis.
              </div>

              <div ref={this.interestsRef}>
                <br />
                INTERESTS Aut quibusdam nisi et veritatis rerum Quis quae quo
                fugit pariatur! Aut repellat soluta et tenetur impedit ut quos
                eligendi vel sint officiis? Tenetur iste eum iste internos ut
                recusandae animi rem molestias omnis. Est tenetur cumque et quia
                repellendus ut accusantium necessitatibus. Et voluptatem iusto
                sit nesciunt sapiente qui atque omnis qui accusantium quos ad
                galisum dolorum quo internos voluptates ut quos dignissimos. A
                modi nihil eos explicabo voluptatum ut ullam nihil? Aut vitae
                fugit qui autem voluptatum sit dolores ducimus in laudantium
                voluptatibus. Ex pariatur adipisci aut similique nemo ex omnis
                consequatur aut vitae quos est galisum dolorum? Sed galisum
                consequatur ut sapiente dolorum aut accusantium alias ut quas
                quasi et doloribus illum.
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
