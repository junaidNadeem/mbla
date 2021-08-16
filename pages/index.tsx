import React from 'react'
import { hot } from 'react-hot-loader'
import { useMediaQuery } from 'react-responsive'

// material ui imports
import { Box, Divider, Grid, Typography, styled, makeStyles } from '@material-ui/core'
import CallIcon from '@material-ui/icons/Call'
import PinDropIcon from '@material-ui/icons/PinDrop'
import EmailIcon from '@material-ui/icons/Email'
import LanguageIcon from '@material-ui/icons/Language'
const WaterMarkBox = styled(Box)({
  position: 'absolute',
  zIndex: -1,
  display: 'flex',
  left: '7.5vw',
  top: 0,
  bottom: 2,
  opacity: 0.1,
  width: '80vw',
  height: 'auto'
})

const MainBox = styled(Box)({
  position: 'relative',
  zIndex: 1,
  padding: '0 40px'
})

const landingPage: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  const classes = makeStyles(() => {
    return {
      contentTypo: {
        height: isMobile ? 'auto' : '300px'
      },
      visionTypo: {
        height: isMobile ? 'auto' : '150px'
      },
      civilTypo: {
        height: isMobile ? 'auto' : '400px'
      }
    }
  })()

  return (
    <React.Fragment>
      <Box>
        <img src="/images/image1.png" width="100%" />
      </Box>
      <Box p={'40px'} display="flex" mt={8} flexDirection="column" alignItems="center" justifyContent="center">
        <img src="/images/mLogo.png" style={{ maxHeight: '100%', maxWidth: '100%' }} />
        <Typography variant="h4" style={{ fontWeight: 'bold', marginTop: '50px', borderBottom: '3px solid #000' }}>
          勉兄弟律师协会 &nbsp; میاں برادرز لا ایسوسی ایٹس ‬
        </Typography>
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
          MIAN BROTHERS LAW ASSOCIATES
        </Typography>
      </Box>

      <Typography variant="h1">Firm PROFILE</Typography>

      <Box mt={5}>
        <img src="/images/image5.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            ABOUT US
          </Typography>
        </Box>
        <Typography className={classes.contentTypo} variant="body1">
          Mian Brothers Law associate is a Firm that provides legal services to the client with seamless assistance. The
          co-partners of our ﬁrm are Mian Tahir Munir and Mian Bilal Munir. The Firm is founded to provide high-quality legal
          services to the client base in pursuit of its motto: Our Clients, Our priority. <br /> Our business revolves around the
          satisfaction of our clients. We strive to deliver values to our clients in various legal areas with full commitment. We
          achieve this by following the basic philosophy that the service provided to the client should be based on the distinct
          knowledge of that particular ﬁeld performed with the highest level of integrity. <br /> The Firm believes in protecting
          its clients from litigation and has the best minds to meticulously design legal solutions that aid and promote the
          commercial interests of the client if litigation does become inevitable. Our clients have consistently rated us highly
          for our ability to identify goals in legal proceedings or transactions and to continually plan and strategize while on
          course to achieving such goals. <br />
          We are proud of the high legal and ethical standards established by its Founding Partners and the tradition of
          excellence that they have maintained throughout their profession.
        </Typography>
      </MainBox>

      <Box mt={5}>
        <img src="/images/image3.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            WHY CHOOSE US
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          Mian Brothers Law Associates is one of the legal institutions in Pakistan and known for its high-end solutions either in
          legal or consultancy services. Both the local and regional clients are acquiring beneﬁts and achieve their desired
          results out of our legal assistance which is also within the same institutional framework. Our success is based on
          unprecedented accumulated experience in dealing with legal issues, negotiation, arbitration, and litigation available to
          our customers to answer all inquiries and provide high-quality services in order to meet client’s interests and building
          a strong and long-term relationship. Our priority and guaranty in providing legal services is the legitimacy and quality
          of client’s rights and interests’ protection.
        </Typography>
      </MainBox>

      <Box mt={5}>
        <img src="/images/image4.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            OUR VISION
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.visionTypo}>
          MiOur vision is to achieve objectives while adhering to the core values of honor, integrity, impartiality, objectivity,
          honesty, and credibility. We aimed at the rule of law and achieving the truth and fair justice with all honesty and
          credibility. We strive hard to defend the honor of our profession by adopting the highest degree of professionalism,
          craftsmanship, and the preservation of our much-valued client secrets. We also communicate the latest developments
          regarding their issues and help them to choose the best available options. Our value-added services make us the top
          choice for everyone looking for legal services.
        </Typography>

        <Box mt={5} display="flex" mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            OUR MISSION
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.visionTypo}>
          To lead the voice of truth in dealing with all sort of legal issues by maximum utilization of our knowledge, experience,
          and skills so that we can solve the most critical problems in minimum possible time in peaceful ways. Achieving the
          aspirations and interests of our customers and meeting all their requirements and needs. We provide special services
          living up to the best global practices and achieving customer satisfaction. Our high standard services help us to meet
          our objective of becoming a role model in achieving fair justice and a model of integrity, transparency, loyalty and
          provide the best legal services with high quality predominantly professional.
        </Typography>
      </MainBox>

      <Box mt={5}>
        <img src="/images/image5.png" width="100%" />
      </Box>

      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            OUR SERVICES
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          Based on decades of law practice to the credit of Senior Partner and Team members, the Firm has established itself as an
          expert in litigating for the Oil and Gas, Banking, Intellectual Property Rights, Taxation, Contract drafting, Business
          Registration, SECP, Civil laws, Criminal laws, Constitutional laws, Environmental laws Construction, Divorce,
          Matrimonial Disputes, Estate Inheritance, Financial Services industries and structuring transactions for clients in the
          said industries. Since its establishment the ﬁrm has advised promoters of solar and wind power projects in Pakistan on
          all aspects of the undertakings including regulatory compliance, drafting, negotiating, or advising on engineering
          procurement contracts, power purchase, implementation and ﬁnancing agreements, and preparing petitions to the regulatory
          authorities.
          <br />
          We have talented legal professionals who provide a vast range of services related to law. We offer the depth to
          represent a broad spectrum of clients dealing in a variety of legal areas. We are committed to adapting to the changing
          needs of our clients. Moreover, the Firm imparts the legal knowledge by offering different d iploma/Internship courses
          to the aspirants. And also leading numerous welfare movements for the cause of humanity.
        </Typography>
      </MainBox>

      <Box mt={5}>
        <img src="/images/image6.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            CIVIL AND CRIMINAL LITIGATION, ARBITRATION, DISPUTE RESOLUTION, APPEAL
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.civilTypo}>
          Litigation in Civil or Criminal cases is aimed to get a fast and fair resolution of the matters. Our team will take care
          of a fair judgment when everything is said and done. We specialize in reliable legal solutions including:
          <br />
          <ul>
            <li>Negotiation</li>
            <li>Litigation</li>
            <li>Alternative Dispute Resolution</li>
            <li>Arbitration</li>
            <li>Appeal</li>
          </ul>
          From ordinary car accident claims up to complex cases, our law ﬁrm provides the same dedicated and qualiﬁed
          representation to all our clients. We regularly brought in as trial or appellate attorneys to handle particularly
          challenging matters. We prioritize Arbitration in many disputes because of its positive role and impact to avoid its
          dealing in the corridors of the judiciary, especially in certain situations, such as spousal disputes or those relating
          to the conclusion and execution of contracts, particularly the long-term technology trade and joint ventures. At the
          Appeal Courts, we represent the appellant or a client responding to an appeal. We can synthesize and analyze the case,
          control the standards of review, create compelling arguments to earn judicial and client trust as well as precedential
          victories. We handle cases on appeal that were originally tried by our attorneys in the trial courts, as well as the
          cases that were tried by other litigators.
        </Typography>
      </MainBox>

      <Box mt={5}>
        <img src="/images/image7.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            INSURANCE MATTERS
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          Insurance is a system designed to protect an entity or institution or individual in the event of exposure to ﬁnancial
          losses caused by an accident. Insurance is really helpful in some cases. Its principle is based on paying a premium
          amount in order to return to the previous situation that was existed before incurring a loss. Due to the rapid growth to
          the pace of economic life, insurance law has divided into many branches dealing with many different sectors. Mian
          Brothers Law Associates supervise all issues and claims arising from the various disputes relating to life, ﬁre,
          demolition, and vehicle insurance, as well as liability insurance, and raise all the issues related to insurance with
          the competent judicial authorities and the representation of the agents in this regard.
        </Typography>
      </MainBox>

      <Box mt={5}>
        <img src="/images/image8.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            CORPORATE AND COMMERCIAL ISSUES
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          Commercial Law at the top of the pyramid of the different branches of law and commercial transactions is the backbone of
          economic life. Given that the business accelerated in the region and the daily changes that occur in the body of the
          judiciary, rhythm is diﬃcult for investors and companies to keep up with secretions commercial reality in terms of the
          rules. This forces you to choose a legal representative and has the extensive practical experience and adapted to these
          changes in order to stay informed with frequent changes in the judicial system. In addition to providing all strategic
          decisions available in a short period to preserve the rights and proﬁts. Our oﬃce provides through its extensive
          experience developed for years in this important full range of unique area, to meet customer requirements to achieve
          satisfaction. These vary between buying and selling, and security systems and dealing with banks and ﬁnancial
          institutions and their representation as plaintiff or defendant. Moreover, ﬁnancing of legislation, dealing with agents,
          contract negotiation, and documentation of various kinds, ranging from the agents, sales and distribution, intellectual
          property, franchise agreements, and collecting all types of services.
        </Typography>
      </MainBox>
      <Box mt={5}>
        <img src="/images/image9.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            INTELLECTUAL PROPERTY RIGHTS (IPR) AND BUSINESS REGISTRATION
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          We help business individuals in registering their business as Sole Proprietorship, Partnership, Limited Company
          Incorporation and afterward all their compliances . While dealing with SECP, Registrar of Firms, Chamber of commerce,
          and various other departments/Organizations. <br />
          Moreover, the protection and defense of your i dea, innovation, invention, or business process in the form of
          copyrights, patents, and trade secrets are crucial to your success as an artist, business owner, entrepreneur, or
          executive. We offer a full spectrum of intellectual property services, including: <br />
          <ul>
            <li>IP Litigation</li>
            <li>Patents</li>
            <li>Licensing</li>
            <li>Trademarks, Service Marks & Trade Dress</li>
          </ul>
          We represent clients through trial and appeal in various IP disputes, including trademark breach or dilution, faked
          advertising, unfair competition, gray market disputes, deceptive trade activities, right of publicity, and advertising
          litigation. As trial attorneys, we are prepared to litigate any dispute, but our priority is our clients business
          objectives.
        </Typography>
      </MainBox>
      <Box mt={5}>
        <img src="/images/image10.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            PROPERTY AND REAL ESTATE
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          Mian Brothers Law Associates property advising services has a wide range all across Pakistan and considers all the
          aspects related to the property industry. We maintained to produce the best of its services in the real estate legal
          space. The team of our legal representatives is qualiﬁed from Western as well as regional institutions that make them
          much more eﬃcient and talented. Our team of well-respected property lawyers harnesses an impressive blend of western and
          qualiﬁcations and is able to work in both styles. Our signiﬁcant association in the improvement of the underlying legal
          structure guarantees our clients’ access to matchless legal advice and comprehension. Being a t op-rated consultancy ﬁrm
          we have the capability for the confrontation of all the aspects related to real estate legal practice, including the
          following: Administrative and administrative issues. Setting up and permitting land organizations. Financing and
          securities. REITS and Real Estate Funds Strata and blended utilization plans. Land obtaining, Acquisition, and
          improvement, including joint endeavors. Property question determination, including court case and nearby and universal
          discretion. Business property exchanges, sale, and purchase. Long haul leases, tenancy registrations – private,
          business, and retail. Short-haul lease agreements – private, business, and retail. General proprietor and inhabitant
          guidance, including case and question.
        </Typography>
      </MainBox>

      <Box mt={5}>
        <img src="/images/image11.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            BANKING SECTORS
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          The banking sector is one of the most inﬂuential and vital ones in economic development by ﬁnancing investment, boosting
          domestic and foreign savings, contributing to the move forward with economic growth, and developing other sectors
          associated with it. The scope of our legal services includes a wide range of banking and ﬁnancial issues, notably:
          ﬁnancing, reﬁnancing facility, loan, guarantee, recovery suit, banking ombudsmen, and shareholder’s agreements. In
          addition to preparing negotiation, trust, commitment, and charge letters.
        </Typography>
      </MainBox>
      <Box mt={5}>
        <img src="/images/image15.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            TAXATION
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          Being certiﬁed tax practitioners, taxation is the forte of our Firm. Our tax practice services include transaction
          planning and restructuring, proper review of accounting procedure, review of ﬁnal accounts for tax provision and
          computation, handling assessment proceedings, appeals from CIT to Honble High Court. Our tax professionals have a strong
          reputation for developing new ideas and solutions that have helped clients to improve their eﬃciencies and offer better
          services. We understand the underlying industry and business issues that our clients face which helps us to customize
          solutions for their speciﬁc needs. We strive to perform the service with proper compliances such as withholding taxes
          and ﬁling of periodical statements. <br />
          Our Tax Services:-
          <ul>
            <li>Direct and Indirect taxes</li>
            <li>FBR, PRA, and Customs</li>
            <li>Income Tax, Sales tax on goods and services</li>
            <li>WeBoc</li>
          </ul>
        </Typography>
      </MainBox>
      <Box mt={5}>
        <img src="/images/image13.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            LABOR DISPUTE
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          There are always some companies that do not follow the laws. When employees face unfair employment practices, our legal
          experts have the experience, ability, and dedication to face even the biggest employers in court. We regularly provide
          consultation to both businesses and employees to deal properly with their respective rights and duties under applicable
          state laws, including the interpretation and effect of employment agreements and employer manuals. We provide a wide
          range of services including negotiating employment or severance agreements, drafting and interpreting employment
          manuals, handling individual and class action wage and hour claims, beneﬁt claims, defending or prosecuting wrongful
          termination claims, or resolving any number of disputes that arise between employers and employees. In today’s complex
          economy, our experienced lawyers will help you professionally and eﬃciently. Our objective is to provide effective
          solutions, including exploring whether insurance coverage may exist to help resolve disputes with existing or former
          employees before Labor Tribunal, Labor Appellant Tribunal, and various other forums.
        </Typography>
      </MainBox>
      <Box mt={5}>
        <img src="/images/image14.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            CONSULTANCY
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          Our team consists of highly dedicated and professional individuals with the entire team at Mian Brothers Law Associates
          adopts a sincere approach when it comes to career counselling, to assist patrons as far as selecting an appropriate
          route for academic development is concerned. <br />
          Our Firm is dedicated to providing services to students in making educational avenues abroad and individuals for
          immigration accessible to them.
        </Typography>
      </MainBox>
      <Box mt={5}>
        <img src="/images/image15.png" width="100%" />
      </Box>
      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" mt={10} mb={5} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            WELFARE ORGANIZATIONS
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.contentTypo}>
          Advisory, Planning, and establishment of charitable organizations, trust, and Will. For non-proﬁt organizations and
          trustees, we provide thorough legal services. To people who are looking for a legal way to accomplish the non-proﬁt
          organizations, we are more than willing to help.
        </Typography>
      </MainBox>
      <Box mt={10}>
        <Grid container>
          <Grid item xs={5}>
            <Box>
              <img src="/images/p1.png" width="100%" />
            </Box>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5}>
            <Box>
              <img src="/images/p2.png" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <MainBox>
        <WaterMarkBox>
          <img src="/images/mLogo.png" width="100%" />
        </WaterMarkBox>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            OUR PARTNERS
          </Typography>
        </Box>

        <Grid container>
          <Grid item xs={5}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                Mian Tahir Munir
              </Typography>
            </Box>
            <Typography variant="body1" className={classes.contentTypo}>
              Is our founder and Managing Partner. He graduated from the University of Management and Technology. He was admitted
              and enrolled as an advocate and solicitor of the High Court of Lahore in 5014. He is a life member of the Lahore Tax
              Bar Association. He has extensive experience in civil, criminal, family, banking, ﬁnance, property, and real estate
              laws. <br /> Aside from that, he also connected directly to soci- ety as an activist through his contributions to
              many social & community services. <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              Some of his involvements are:
              <ul>
                <li>Legal Advisor Maverick PVT LTD</li>
                <li>Legal Advisor Belgian Advance PVT LTD (Foreign Company)</li>
                <li>Jinko Solar (Chines Company) as Pakistan Legal Head</li>
                <li>Legal Advisor Preeshay Cosmetics PVT LTD</li>
                <li>Legal Advisor Aroosa Gul By Shahid PVT LTD</li>
                <li>Founding member of World Movement for the Restoration of Human Rights</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Divider orientation="vertical" style={{ background: 'black', width: '5px' }} />
          </Grid>
          <Grid item xs={5}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                Mian Bilal Munir
              </Typography>
            </Box>
            <Typography variant="body1" className={classes.contentTypo}>
              Is our founder and Partner. He graduated from the University of Punjab in Commerce and holds a Bachelors of Law
              degree and a Masters of Law degree from the University of Punjab. He is admitted and enrolled as an advocate and
              solicitor of the Lahore High Court Lahore and Tax Bar Association. He has extensive experience in all aspects of
              corporate and commercial matters, including drafting of commercial agreements, corporate governance for some big
              names clients, advice corporate management, boards of directors, and shareholders on such matters as ﬁduciary
              duties, corporate laws, governance requirements, and boards responsibilities. He is a certiﬁed tax practitioner and
              has vast experience in Arbitrations Proceedings, Labor Disputes, Insurance, Business Registrations, and Banking
              matters.
            </Typography>
            <br />
            <br />
            <br />
            <Typography variant="body1" className={classes.contentTypo}>
              Some of his involvements are:
              <ul>
                <li>Registrar for Various Arbitration Proceedings</li>
                <li>Registrar on behalf of Sui Northern Gas Pipelines Limited</li>
                <li>Longi Solar (Chines Company) as Pakistan Legal Head</li>
                <li>Legal Counsel for Standard Chartered Bank</li>
                <li> Legal Counsel for Habib Bank Limited </li>
                <li>Legal Advisor Aesthetic Planet PVT LTD</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </MainBox>

      <Box mt={10}>
        <Box style={{ backgroundColor: '#0A1830' }}>
          <Typography variant="h4" style={{ paddingTop: '30px', textAlign: 'center', color: '#fff' }}>
            Presence of our legal team
          </Typography>
          <Box p={3} display="flex" justifyContent="center">
            <img src="/images/map.png" alt="map" width="100%" />
          </Box>
          <Box mt={5}>
            <img src="/images/lightLogo.png" alt="LOGO" width="10%" height="10%" />
          </Box>
        </Box>
      </Box>

      <Box mt={10}>
        <Box mt={5}>
          <img src="/images/image16.png" width="100%" />
        </Box>
        <Box mt={2}>
          <Box
            style={{
              backgroundImage: `url(${'/images/image17.png'})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              height: '95vh'
            }}>
            <Box pt={20}>
              <Typography variant="h4" style={{ textAlign: 'center', color: '#fff' }}>
                CONTACT US
              </Typography>
              <Box pl={10}>
                <Box mt={5}>
                  <Box display="flex" alignItems="center">
                    <Box
                      style={{
                        borderRadius: '100%',
                        background: '#888888',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '20px'
                      }}>
                      <CallIcon style={{ color: '#fff' }} />
                    </Box>
                    <Typography variant="body1" style={{ textAlign: 'center', color: '#fff' }}>
                      +92 301-11116369
                    </Typography>
                  </Box>
                </Box>
                <Box mt={5}>
                  <Box display="flex" alignItems="center">
                    <Box
                      style={{
                        borderRadius: '100%',
                        background: '#888888',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '20px'
                      }}>
                      <PinDropIcon style={{ color: '#fff' }} />
                    </Box>
                    <Typography variant="body1" style={{ textAlign: 'center', color: '#fff' }}>
                      Al-Meraj Arcade, Plot No.76 Chuburji, Lahore
                    </Typography>
                  </Box>
                </Box>
                <Box mt={5}>
                  <Box display="flex" alignItems="center">
                    <Box
                      style={{
                        borderRadius: '100%',
                        background: '#888888',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '20px'
                      }}>
                      <EmailIcon style={{ color: '#fff' }} />
                    </Box>
                    <Typography variant="body1" style={{ textAlign: 'center', color: '#fff' }}>
                      mbla.live@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box mt={5}>
                  <Box display="flex" alignItems="center">
                    <Box
                      style={{
                        borderRadius: '100%',
                        background: '#888888',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '20px'
                      }}>
                      <LanguageIcon style={{ color: '#fff' }} />
                    </Box>
                    <Typography variant="body1" style={{ textAlign: 'center', color: '#fff' }}>
                      www.mbla.live
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

declare let module: Record<string, unknown>

export default hot(module)(landingPage)
