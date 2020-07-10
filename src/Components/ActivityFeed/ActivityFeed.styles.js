import styled from "styled-components";
import tokens from '../Util/Token';
import React, { useState, useEffect } from 'react';
import { Title } from '../Title';
import { Tag } from '../Tag';
import { Label } from '../Label';
import { Icon } from '../Icon';

const ActivityFeedContainer = styled.div`
  background-color: ${props => props.containerColor};
  border-radius: 15px;
  height: ${props => props.height};
  width: 280px;
  font-family: ${tokens.fontFamily.default};
  box-sizing: border-box;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  margin: 20px 20px 20px 20px;
  padding: 10px;

  ${props => (props.isAlertOn ? isAlertOnStyle(props.borderTopColor) : "")}

`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

`;

const ActivityFeedStyles = (props) => {
    console.log(props.data);
    function getItem() {
        let renderListOfActivity = [];
        props.data.map((item) => {
            let completed = item.completed ? 'Completed Task:' : 'Commented Task: ';

            renderListOfActivity.push(
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <div style={{ marginRight: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <div style={{ margin: 0, width: 20, height: 20, backgroundColor: 'gray', borderRadius: 10}}></div>
                    <div style={{ margin: 0, height: 120, width: 2, backgroundColor: 'gray'}}></div>
                </div>
            
                <div style={{ width: 200, height: 120, display: 'flex', flexDirection: 'column'}}>
                
                    <div style={{ width: 200, height: 45, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{ marginRight: 10}}>
                            <img 
                                src={item.imageUrl} 
                                style={{ width: 40, height: 40, borderRadius: '15%' }}
                            />
                        </div>

                        <div>
                            <Label level={2}> {item.name} </Label>
                            <span style={{display: 'block', fontSize: 10}}> in  <span style={{ color: tokens.color.brandBlue, fontSize: 13}}> {item.major} </span></span>
                        </div>
                        <div style={{ width: 30, position: 'relative'}}>
                            <span style={{ position: 'absolute', right: 0, fontSize: 12, color: 'gray'}}> {new Date(item.date).getUTCDate()}</span>
                        </div>
                    </div>

                    <div style={{ fontSize: 13, fontWeight: 5}}>
                        <span style={{ fontSize: 13, fontWeight: 5}}> {completed} </span> <span style={{ fontSize: 12, color: 'gray'}}> {item.taskName} </span>
                    </div>
                </div>
            </div>
            )
        })

        return renderListOfActivity;
    }
    return (
        <ActivityFeedContainer>
            <TitleContainer>
                <Title level={4}> Activity Feed</Title>
                
                <Tag size="xsmall">Live</Tag>
            </TitleContainer>
            <div style={{ margin: 10}}>
                
                {getItem()}
            </div>
        </ActivityFeedContainer>
    );
}


export default ActivityFeedStyles;

const isAlertOnStyle = (borderTopColor)=> {return `
    border-top: 15px solid;
    border-top-color: ${borderTopColor};
`}


