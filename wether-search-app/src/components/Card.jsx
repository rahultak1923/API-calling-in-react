import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="container">

<table class="table">
<thead className="table-dark">
<tr>
  <th scope="col">#</th>
  <th scope="col">Weather</th>
  <th scope="col">City</th>
  <th scope="col">Country</th>
  <th scope="col">Temp_c</th>
  <th scope="col">wind_kph</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td><img style={{width:"16%"}} alt="Weather condition icon"/></td>
  <td>name</td>
  <td>location</td>
  <td>temp_.c</td>
  <td>wind_kph</td>
</tr>

</tbody>
</table>
</div>
    </div>
  )
}

export default Card
