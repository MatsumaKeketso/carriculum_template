import React, { CSSProperties } from "react";
import ListItem from "../ListItem/ListItem";
import Typography from "../Typography";
import { pageStyle, sections } from "./style";
const Page = () => {
  return (
    <div style={pageStyle}>
      <div style={{ backgroundColor: "tomato", ...sections }}>
        <Typography variant="h4">Lesson 1: 24 June 2022</Typography>
        <Typography variant="h6">Overview and Purpose</Typography>
        <Typography variant="b1">
          Introduction to AWS services and to the niche focus of the lessons
          ahead. Participants will learn how to set up the environment and
          familiarise them with AWS console.or sit amet, consectetur adipiscing
          elit. Integer lobortis ante et lacus eleifend, a tempor felis
          pharetra. Nullam nisi massa, auctor quis mattis sed, bibendum quis
          risus. Phasellus sit amet leo tristique, blandit enim in, viverra
          mauris. Mauris sit amet arcu condimentum mauris feugiat venenatis sed
          viverra sapien. Sed blandit non ipsum nec pharetra. Aliquam tortor
          neque, gravida et ligula a, aliquam auctor velit. Cras lacinia
          imperdiet ipsum a luctus.
        </Typography>
      </div>
      <div style={{ paddingTop: 30, ...sections }}>
        <Typography variant="h6">EDUCATION STANDARDS</Typography>
        <ListItem
          type="video"
          link="https://www.youtube.com/watch?v=OH4msPNM2CI"
        >
          Introduction to Amplify(DynamoDB, S3, Cognito)
        </ListItem>
        <ListItem
          type="list"
        >
          Introduction to Amplify(DynamoDB, S3, Cognito)
        </ListItem>
      </div>
    </div>
  );
};

export default Page;
