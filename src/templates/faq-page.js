import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Link from "gatsby-link";
import { HTMLContent } from "../components/Content";
// import jQuery from "jquery";
import "../components/accordionfaq.css";

export class FaqPageTemplate extends React.Component {
  constructor({ title, header, path, qa, contentComponent }) {
    super({ title, header, path, qa, contentComponent });

    this.state = {
      preparefaq: null,
      bookmarkscroll: null,
      selectedQuestion: -1
    };
  }

  selectQuestion(index) {
    console.log(index);
    this.setState({
      selectedQuestion: index
    });
  }

  componentDidMount() {
  }

  render() {
    const PageContent = this.props.contentComponent || this.props.Content;
    return (
      <section className="Vsebina">
        <div className="pot">
          <ul className="breadcrumb">
            <li>
              <Link to="/slo/" className="pathway">
                Prva stran
              </Link>
              <span className="divider"> &gt; </span>
            </li>
            <li>
              <Link to={this.props.path} className="pathway pathway-last">
                {this.props.title}
              </Link>
            </li>
          </ul>
        </div>
        <div className="teloVsebine">
          <div className="item-page">
            <div className="page-header">
              <h1>{this.props.header}</h1>
            </div>
            <div
              id="accordion1"
              className="accordionfaq lightnessfaq headerbackground headerborder contentbackground contentborder round5 faq-accordion selected"
            >
              {this.props.qa.map(({ question, answer }, i) => {
                return (
                  <React.Fragment key={i}>
                    <h3
                      className={"accordionfaqheader accordion1 " + (this.state.selectedQuestion === i? 'selected' : '')}
                      id={"accordion" + i + 10}
                      onClick={() => this.selectQuestion(i)}
                    >
                      <span className="accordionfaqicon"></span>
                      <span className="autonumber">{i + 1}.</span>
                      <span className="headertext">
                        <a>{question}</a>
                      </span>
                    </h3>
                    <div className="accordionfaqitem" style={{
                      display: (this.state.selectedQuestion === i? 'block' : 'none')
                    }}>
                      <PageContent content={answer} />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FaqPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const FaqPage = ({ data, pathContext: { locale, slug } }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout pageTitle={post.frontmatter.title} locale={locale} slug={slug}>
      <FaqPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        path={slug}
        header={post.frontmatter.header}
        qa={post.frontmatter.qa}
      />
    </Layout>
  );
};

FaqPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default FaqPage;

export const faqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        header
        qa {
          question
          answer
        }
      }
    }
  }
`;
