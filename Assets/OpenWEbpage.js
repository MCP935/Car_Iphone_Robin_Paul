#pragma strict

public var urlString = "";

function OpenWeb () {
	Debug.Log("Web here");
	Application.OpenURL(urlString);
}
