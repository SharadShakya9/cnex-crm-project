import React from "react";
import { TableHeader, Title, TitleContainer, SubText } from "./styleTable";

function Profile() {
  return (
    <div>
      <TableHeader>
        <TitleContainer>
          <Title>Customer Profile</Title>
          <SubText>View all customer details</SubText>
        </TitleContainer>
      </TableHeader>
    </div>
  );
}

export default Profile;
