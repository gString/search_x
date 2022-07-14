import styled from "styled-components";

export const Item        = styled.li`
  position: relative;
  display: block;
  margin-bottom: 30px;
`;

export const BreadCrumbs = styled.cite`
  position: absolute;
  display: inline-block;
  left: 0;
  top: 0;
  font-style: normal;
  color: #202124;

  span {
    color: #5f6368;
  }
`

export const MainLink    = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: normal;
  font-size: small;
  line-height: 1.58;
`;

export const Title       = styled.h3`
  display: inline-block;
  margin-bottom: 0;
  padding-top: 5px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
`;

export const Description = styled.p`
  margin: 12px 0 0 0;
  font-family: arial, sans-serif;
  font-size: 14px;
  line-height: 1.58;
`;

export const Date        = styled.span`
  color: #70757a;
`;

export const ExtraLink   = styled (Description)`
  margin-top: 5px;

  ${ Date } {
    margin-left: 12px;
  }
`;