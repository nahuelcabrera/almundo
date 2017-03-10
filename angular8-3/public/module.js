angular.module("modulo").directive("miDirectiva", miDirectiva)
function miDirectiva()
{
    return
    {
        template: "<p>Hola</p>",
        controller: function ($scope)
        {

        },
        scope
        {

        }
    }
}
