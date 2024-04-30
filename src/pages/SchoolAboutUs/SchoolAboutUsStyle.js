import { styled } from "styled-components";

export const SchoolAboutUsStyle = styled.div`

.breadcrumbs-div{
    max-width: 1207px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;


}


.breadcrumbs-div p{
    text-transform: uppercase;
    font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: left;
color: rgba(4, 156, 80, 1);


}

.color-purple{
    color: rgba(26, 48, 129, 1);
}


.about-us{
    margin: auto;
    max-width: 1259px;
}


@media only screen and (min-width: 1100px) {

.about-us .container .row .col-md-6:first-child{
    padding-right: 60px;
} 

}
`
;