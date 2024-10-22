export const MeetingsIcon = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="5.5" cy="5.5" r="5.5" fill="url(#pattern0_501_191)" />
      <defs>
        <pattern
          id="pattern0_501_191"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_501_191" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_501_191"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIj0lEQVR4nO1dWaxURRBtcN8X4E3XsBlFUaLxw8Rf/4x7/BD35UdxSYzCe9XzMCYjfmg0fOiX4r5EUVx+jIobEEAj8ISpmgEJwSdojCai0WAEZBlTd6765i5Plr7Tfe/MSSohj3vndte5fbu6uqpaqR566KGHHnrIC2YuOgwqdKNGesR1U7oaM6qNI/VA7VZteCMYbgLy7omGJrluVxeiOQaQb9LI3wdEjBSkh123rqug+xszAGlpjIhQhCRVbY513c7CY2r126M18mNg+K9EIgztBENP9Q3y6fvze6XKutNKFb5cI/dr5GfA0DIwXAfDwxr5V3mORtoV/nu49X/BNQvkHrlXfkN1I8pI0zVSLXlE0A4wNH8yflUe7Tcm41dljfVbwPCLGmlr2gg7cKEtGukF+e3xD2wAVXRoQ9cA8m/Jo4I/hbl8dtq9k2Z/cYxGngmG3pMJ3x4JKYK0VxtaCcizxuHXJ6hCYdbQEdrwsymjYisgX51260Rce2Z47x+Zk5BOznZpw6TBxjSVd5T6a8cB8gcpnX37lMrQSSn3nQuGXunIaDD7P2qCETrIF6g8AuYMjQfDXyZ8nv4EpNuT7in11/oA+SUwtM85ASZNgra9qOeunaDygvKc+mSN9HUCGZvk7Y/dUG2O1ZXa3aEl1MyDaEO/aMN3em+ay8hIIgMMrZEREL1e96+fqpE+d61gOHhiVkKlMUX5CKgOHZusXFpy6r2bToxeX67UrpQ3zbVS4VAF+TexIpV31hTy4nhj6Z1p9246KuZENDTf77mCD1CCvjzuzScsybTVhj8Rx+HI64QcMLzIvQI5o9FCb0b73HGUsX5dwhuzJrqomlBtHK8NfeRcaSbz0ZL4ie4QGTRdFk+RkbEpahYKOYC0upOKURF0dqTwqo6v8kNH4do2MpB2TKzUz4/tdzgYGcolIeFIic2fWSL02kbejMiiL5jA3cwZyjkhgVn8Rkcm+mA/I+JC18ivxZUg1lTnFQGeEBLq5bGM6WiOkeHY/lDaGv1mlpGucmnaKk8IER2UsH5FZnTItmvsoRGvbeg+2eZOCewRIcEo+TWTjTCZpOJ74PR+zDflgTtEeURISMoK6/OJbNq0PcTQzvJg7ayR12ike1x3HjwkJBDkWfbYaLk8Nrc/hOaPvEQciL54bZWHhAS+uzlD4zOZO2R0RPfAAfll150GjwkJ9Ib0nBVCNNKjbbt4SE+P/P++Cp3nk8NQeUpIsGff35hhhZQJAw0NyBWJ0ojuM2vkhc47a3JASIuUV5VVRKwFCUgAw3ucd9TkhBDDezINnEiLLOkRwqk6kMC+DKNL2j2+PoiKwHV7EuQP2ZKwTog2dJsHnWvmkJCmrvDN1gkB5M9cdwzySoihj6ySIeuQVhCZ+85BDgmRyV0sV2uESKKNB51q5piQpmSNWSNEovicd8jkmxCxUC0SQltcdwhyTojo0AoZ4t933xkuACHy2bIQ/Si7YM47YopBiDZ06SETIilhrjsCBSEEDN1vg5Bn3HeEi0LIU4dMSJg86UFnuAiELLFASJDt2vRUhhPaO+xBu5IFmQts8tLm8uCGcdH2yt/iW9D+vkAHDNdhPpAio+VqtLJ5PWwz0jYbhOxy3RFIkKn3rTs5rc2TZjdO9fQl2llYQsaNEnXe+mwVlxAvP1kwSu67qi49XAKg/SOEfy7spK4Nb5wyyKfkjJThQpu92tB3MoFLJpPMG0KCz6RoQ1T4hSG0d/gNv0mxsDD03XUCUUF+K0aKhMcivVoI14nvzkXIFSkWnIu+u98hR6RYcb/7vkEFeZpTbJXnAORvXSsX8j5SkL9RtiBl8Zwr1uSbFKtBDmH9Q/eKNTkmBekGa4RIwUhfA+XAwpzSgcXvnr65XFI2IUVmXCsUMhgpgPRQ5i8C8mKrZPgevQgHSUonyAifd5N1QiSk3sd0BDh4JTU68xzaLqkcqlsSdsB/WaCygo8pbeCzIO+eMFA/o02JMxcdZpUUbfh15x01eRF6ZaTuhBzZpNJIT0pZEiuEhAWQvUmLBl8lKGVePydtgd3aGqd5hU9PAE8kujIPS+W2xSeUDF9rhRAp7VeI0q8mIzIkDiFSWiNuENF6q0VqNPJdrjsOvkqk4l6r+kXkLBWbGVX/lmeSis+uO2/8Em14edub39LTF5FrNlq3tgRyqJdYDa6VAD7Viu9fP3W0UlcicuKPygqtHcWe1QWG9mnky0bqRhyKCXPt2yprSPlt128nuB4dSI8mVNz7uO06pO2dOSqw2hwr5be7lwxeGLWYNNKDCdf1K+eF+gsvFCukrJEviruYaFkmE/loaJUa51XulcTOSo3LUYBg6Mf26+gnZ6fCiau5K0YK8mfRYvzBQTf/HC37Hxl7YaB+sXIJqQNf5DlFIy+MHlcR7BcZWhMnjh5SXiCwMqRufJFMYtoXWFORCTz4KiRucYu3tzlG+QRZp3ibY2IOZFTQtqQFnaREJBWUloM0nR/6koZWSXJekVsyDC9PWj9IJCIgbYjdg7wqs21bu2sVnpUnL7EORjbdkeSVLZl1F6YcSb7aWhHlTqBlidDzXsd5oWwu8bNJadfhqRH3J+Veyso8k/qKnUDrbBIfj17lRWkFkMXMTbMetaF35TQilXdIXdsgKchliBHSdmlDLCBhBMqmdr02/IP3R+lZPutqpovju0f7zMgLA4Y/TP4d+t2/wyYzQN9cLkm0nxS0t1y7ZDj4zQrd+H+xtuFezxOSW55MKK+K7n10DaDSmCLZRxppthwOIA49yWiVnItgUwhpVyBiwcnfkGrBcU1IT8s9eqB2yf4my7R8UbwgrWBCiyCa5+0ao1CoBt6FuCn7DxnIiyVY0HUzuwqA9HDCXLFF5jfXbetKTJai0f9FiAwD0n0dPTiyhzg00iNBxlOnN5R66KGHHnroQR08/gYALaERPtUPMwAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};
