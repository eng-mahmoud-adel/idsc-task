import './App.css';
import JobsTabs from './components/tabs/jobsTabs/JobsTabs';
import SearchTabs from './components/tabs/searchTabs/SearchTabs';
import { Row, Col, Form} from 'react-bootstrap';
import JobSearch from './components/forms/JobSearch';
import { FaBuilding } from 'react-icons/fa';
import { BsBook, BsHeart, BsFillKeyboardFill } from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';
import { AiFillCar } from 'react-icons/ai';
import JobTypes from './components/jobTypes/JobTypes';
import SocialMedia from './components/cards/socialMedia/SocialMedia';
import FeaturedJobCarousel from './components/carousel/featuredJobs/FeaturedJobCarousel';
import Candidates from './components/carousel/candidates/Candidates';
import BaseButton from './components/buttons/Button';
import { changeLang } from './redux/actions/changeLang';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const handleChangeLanguage = (locale, isLTR) => {
      dispatch(changeLang(locale, isLTR));
      i18n.changeLanguage(locale);

      if(isLTR) {
        document.getElementById('website_layout').setAttribute('href', '/assets/css/ltr.css');
      } else {
        document.getElementById('website_layout').setAttribute('href', '/assets/css/rtl.css');
      }
  }

  return (
    <div className="App">
      <div className="google-map-code">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183948656437!2d-73.98773128509401!3d40.75797874273919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2seg!4v1635956965354!5m2!1sen!2seg" width="100%" height="350" style={{border:0}} allowFullScreen={true} loading="lazy"></iframe>
      </div>
      
      <div className="container">
        <section id="search_section" className="mb-5">
          <SearchTabs tabsKeys={['FIND A JOB', 'FIND RESUME']} />
        </section>

        <section id="jobs_section">
          <Row>
            <Col md={8} className="mb-3 mb-lg-0">
              <Row className="justify-content-between align-items-center mb-2">
                <Col>
                  <h6>{t("we have")} <span className="text-primary">1245</span> {t("potential jobs for you")}</h6>
                </Col>
                <Col className="text-end">
                  <Form className="d-flex justify-content-end align-items-center">
                    <small className="text-muted">{t("sort by")}: </small>
                    <Form.Group>
                      <Form.Select>
                        <option>{t("newest")}</option>
                        <option>{t("oldest")}</option>
                      </Form.Select>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <JobsTabs tabsKeys={['ALL JOBS', 'FULL TIME', 'TEMPORARY', 'INTERNSHIP', 'PART TIME', 'FREELANCE']} />
            </Col>

            <Col md={4}>
              <JobSearch />
            </Col>
          </Row>
        </section>

        <section id="featured_jobs_section">
        <Row>
          <Col md={8}>
            <div className="left_side my-4">
              <Row>
                <Col xs={4} className="pe-0">
                  <JobTypes leftIcon={<FaBuilding size={25} className="me-3 text-primary" />} job_type="Construction &amp; Build" num_of_positions="7" bottom_border />
                </Col>
                <Col xs={4} className="px-0">
                  <JobTypes leftIcon={<BsBook size={25} className="me-3 text-primary" />} job_type="Education &amp; Training" num_of_positions="32" bottom_border right_left_border />
                </Col>
                <Col xs={4} className="ps-0">
                  <JobTypes leftIcon={<GoGraph size={25} className="me-3 text-primary" />} job_type="Accounting &amp; Finance" num_of_positions="0" bottom_border />
                </Col>

                <Col xs={4} className="pe-0">
                  <JobTypes leftIcon={<BsHeart size={25} className="me-3 text-primary" />} job_type="Healthcare &amp; Beauty" num_of_positions="2" />
                </Col>
                <Col xs={4} className="px-0">
                  <JobTypes leftIcon={<AiFillCar size={25} className="me-3 text-primary" />} job_type="Cars &amp; Automative" num_of_positions="9" right_left_border />
                </Col>
                <Col xs={4} className="ps-0">
                  <JobTypes leftIcon={<BsFillKeyboardFill size={25} className="me-3 text-primary" />} job_type="Web &amp; Development" num_of_positions="8" />
                </Col>
              </Row>
            </div>

            <Row className="mt-5 mb-5 mb-lg-0">
              <Col lg={6}>
                <SocialMedia socialMedia="telegram" />
              </Col>

              <Col lg={6}>
                <SocialMedia socialMedia="twitter" />
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <div className="right_side my-4">
              <h5>Featured Jobs</h5>
              <div>
                <FeaturedJobCarousel />
              </div>
            </div>
          </Col>
        </Row>
        </section>
      </div>

      <section id="candidates" className="my-4">
        <small>Find Top Talents</small>
        <h3>Explore Our Latest Candidates</h3>
        <hr />
        <p>Work with someone perfect for your team &amp; get amazing results working with <br /> the best employees hire talents with confidence!</p>

        <div className="container">
          <Candidates />
        </div>

        <div className="my-4 btn-wrapper">
          <BaseButton className="bg-black explore_btn">Explore All</BaseButton>
        </div>
      </section>

      <section id="language_btn">
        <BaseButton onClick={(e) => e.target.innerText == 'AR' ? handleChangeLanguage('ar', false) : handleChangeLanguage('en', true)}>{t("AR")}</BaseButton>
      </section>
    </div>
  );
}

export default App;
