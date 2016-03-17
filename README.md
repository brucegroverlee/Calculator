# Calculator
This is the repository for the first Project of the course 'Mobile Applications with Ionic: Create Android and iOS apps with HTML, CSS and Javascript'

Este es el repositorio del primer proyecto del curso 'Aplicaciones móbiles con Ionic: Crea aplicaciones Android y iOS con HTML, CSS y Javascript'
##¿Qué se aprenderá?
* Crear un proyecto desde cero (Single-view)
* Usar SASS como precompilador de CSS
* Usar Ionic Components
* Crear Controladores y Servicios en Angular
* Adicionar Icono y splash screen
* Adicionar plataforma android y publicar App en Google Play
* Adicionar plataforma iOS y publicar en App Store

##Empecemos
####I. Creamos el proyecto

```js 
ionic start Calculator blank 
```

`'blank'` es el template

####II. Ingresamos al proyecto creado
Nos movemos al directorio del proyecto creado
```js
cd Calculator
```
Para efecto del curso continuaremos el proyecto desde el siguiente repositorio descargado al escritorio
```js
git clone https://github.com/brucegroverlee/Calculator.git
```
una vez descargado el proyecto, ingresamos en él e ingresamos el siguiente comando en la consola
```js
git checkout 00
```
####III. Probamos nuestro proyecto con el servidor web de Ionic
```js
ionic serve
```
####1. Configuramos SASS como nuestro pre-compilador de CSS
```js
ionic setup sass
```
Paso
```
git checkout 01
```
####2. Usar Ionic Components para crear la interface de la calculadora
http://ionicframework.com/docs/components/
Paso
```
git checkout 02
```
####3. Crear un Controlador con AngularJS
el modelo básico de un controlador es el siguiente:
en un archivo `controllers.js` creamos nuestro controlador
```js
angular.module('myApp.controllers', [])
.controller('myCtrl', ['$scope', 'myService', ..., function ($scope, myService, ...) {
	$scope.variable1 = 'Bruce'
	$scope.variable2 = {
		subvariable1 = true
		subvariable2 = false
	}

	$scope.myFunction1 = function () {}
}])
```
en el archivo `app.js` declaramos el controlador que acabamos de crear
```js
angular.module('myApp', ['myApp.controllers'])
```
en el archivo `index.html`
```html
<script src="js/app.js"></script>
<script src="js/controllers.js"></script>
<body ng-app="myApp" ng-controller="myCtrl">
	Hi {{variable1}}
	<div ng-init="varible2.subvariable1"></div>
	<button ng-click="myFunction()"></button>
</body>
```
Paso
```
git checkout 03
```
####4. Crear un Servicio con AngularJS
el modelo básico de un servicio es la siguiente:
en un archivo `services.js`
```js
angular.module('myApp.services', [])
.factory('myService', ['$http', '$q', ..., function ($http, $q, ...) {
	function myFunctionA () {}

	function myFunctionB () {}

	return {
		myFunction1 : myFunctionA
		myFunction2 : myFunctionB
	}
}])
```
en el archivo `app.js` declaramos el servicio que acabamos de crear
```js
angular.module('myApp', ['myApp.controllers', 'myApp.services'])
```
en el archivo `controllers.js`
```js
angular.module('myApp.controllers', [])
.controller('myCtrl', ['$scope', 'myService', ..., function ($scope, myService, ...) {
	$scope.variable1 = 'Bruce'

	$scope.myFunction1 = function () {
		$scope.variable2 = myService.myFunction1()
		return $scope.variable2
	}
}])
```
en el archivo `index.html`
```html
<script src="js/app.js"></script>
<script src="js/controllers.js"></script>
<script src="js/services.js"></script>
<body ng-app="myApp" ng-controller="myCtrl">
	Hi {{variable1}}
	<div ng-init="varible2.subvariable1"></div>
	<button ng-click="myFunction()"></button>
</body>
```
Paso
```
git checkout 04
```
####5. Usar hojas de estilo SCSS
en el directorio scss de la carpeta raíz creamos un archivo llamado `_theme.scss`
```css
$background: #FCCDFA;

.buttons-content {
	background-color: $background; 
}
```
en el archivo `ionic.app.scss` importamos la hoja de estilo que hemos creado
```css
@import './_theme.scss'
```
Paso
```
git checkout 05
```
####6. Añadir Icono y Splash screen a nuestra aplicación
creamos una carpeta llamada `resources` en la carpeta raíz del proyecto.
ahí copiamos los archivos que servirán como ícono y splash screen con los nombres `icon.png` y `splash.png` respectivamente
```
Calculator
+--plugins
+--resources
|  +--icon.png
|  +--splash.png
+--scss
+--www
|
```
Paso
```
git checkout 06
```
####7. Config.xml
Acá podemos modificar la información de la aplicación como título, descripción, versión, autor, etc. 
Para mayor información revisar [Apache Cordova config.xml](http://cordova.apache.org/docs/en/latest/config_ref/index.html)
Paso
```
git checkout 07
```
####8. Adicionar plataforma android y publicar App en Google Play
#####Primero, se adiciona la plataforma que vamos a usar
```js
ionic platform add android
```
#####Segundo, generamos el ícono y el splashscreen para la plataforma adicionada
```js
ionic resources --icon
ionic resources --splash
or
ionic resources
```
http://developer.android.com/

https://appleid.apple.com/
https://developer.apple.com/
