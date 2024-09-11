<html>

<head>
  <title>Problema</title>

<body>

  <?php
  echo("Hola esto es una prueba")
  $conexion = mysqli_connect("localhost", "root", "", "pruebas") or
    die("Problemas con la conexión");

  $registros = mysqli_query($conexion, "select id,nombre,apellido,fecha,pais 
                        from abm") or
    die("Problemas en el select:" . mysqli_error($conexion));

  while ($reg = mysqli_fetch_array($registros)) {
    echo "ID:" . $reg['id'] . "<br>";
    echo "Nombre:" . $reg['nombre'] . "<br>";
    echo "Apellido:" . $reg['apellido'] . "<br>";
    echo "Fecha:" . $reg['fecha'] . "<br>";
    echo "Pais:" . $reg['pais'] . "<br>";
    switch ($reg['id']) {
      case 1:
        echo "PHP";
        break;
      case 2:
        echo "ASP";
        break;
      case 3:
        echo "JSP";
        break;
    }
    echo "<br>";
    echo "<hr>";
  }

  mysqli_close($conexion);
  ?>

</body>

</html>