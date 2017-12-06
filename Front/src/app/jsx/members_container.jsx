import React from 'react'
import {Member} from './member.jsx'

function MemberContainer(props) {
    return  <div className="honeycombs">
                {
                    props.members_info.map(function (mem) {
                        return <Member  id={mem.id}
                                        name={mem.name}
                                        img={mem.img}
                                        prof={mem.prof}
                                        SN = {mem.SN}/>
                    })
                }
            </div>
}

module.exports = {
  MemberContainer : MemberContainer
};