var APP_DATA = {
  "scenes": [
    {
      "id": "0-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1450,
      "initialViewParameters": {
        "yaw": 0.04820227382404596,
        "pitch": -0.043101944889039956,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.832183139794699,
          "pitch": 0.058587947471739454,
          "rotation": 0,
          "target": "2-sala"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.021391002823204275,
          "pitch": -0.014761549097498161,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Departamento tipo D-01</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">70 m2 habitables</font></font><div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Se entrega con cocina, cubierta de granito y alacenas en acabados de MDF tipo madera.</font></font></font></font></div><div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><br></font></font></font></font></div><div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Precio de departamento desde: $2,300,000.00 MXN</font></font></font></font></font></font></div>"
        }
      ]
    },
    {
      "id": "1-recamara-principal",
      "name": "Recamara principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1450,
      "initialViewParameters": {
        "yaw": 0.15605369614499942,
        "pitch": -0.007495990415483433,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.3584488744783787,
          "pitch": 0.1612104744995051,
          "rotation": 0,
          "target": "2-sala"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.11294286687624755,
          "pitch": -0.16858847192522575,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Recamara principal</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Recamara con balcon, 1 baño completo y closets incluidos.</font></font>"
        }
      ]
    },
    {
      "id": "2-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1450,
      "initialViewParameters": {
        "yaw": 0.24746113903343847,
        "pitch": -0.04497594249290948,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 1.1993576651380398,
          "pitch": -0.09718216988578376,
          "rotation": 0,
          "target": "0-cocina"
        },
        {
          "yaw": 2.401900094112901,
          "pitch": 0.16830709504969477,
          "rotation": 0,
          "target": "1-recamara-principal"
        },
        {
          "yaw": 3.113741423313063,
          "pitch": 0.2373600253488295,
          "rotation": 0,
          "target": "3-recamara-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.30329939203022427,
          "pitch": -0.30045713327873536,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Acabados interiores</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">miste departamento cuenta con acabados de yeso en muros, piso ceramico tipo madera en pisos y baños.</font></font>"
        }
      ]
    },
    {
      "id": "3-recamara-2",
      "name": "Recamara 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1450,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.4654765178047544,
          "pitch": -0.22062832223837425,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Recamara secundaria</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Cuenta con closets incluidos, piso ceramico y acabado de yeso en muros.</font></font>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
