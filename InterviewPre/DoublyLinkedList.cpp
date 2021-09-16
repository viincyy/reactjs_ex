#include<iostream>
using namespace std;

struct Node {
	int data;
	Node* next;
	Node* prev;
};

class DoublyLinkedList {
private:
	Node* head;
	Node* tail;
public:
	DoublyLinkedList() {
		head = tail = NULL;
	}
	void insertHead(int value) {
		Node* newNode = new Node;
		newNode->data = value;
		newNode->next = NULL;
		newNode->prev = NULL;

		if (head == NULL) {
			head = tail = newNode;
		}
		else {
			newNode->next = head;
			head->prev = newNode;
			head = newNode;
		}
	}
	void insertTail(int value) {
		Node* newNode = new Node;
		newNode->data = value;
		newNode->prev = NULL;
		newNode->next = NULL;

		if (tail == NULL) {
			head = tail = newNode;
		}
		else {
			tail->next = newNode;
			newNode->prev = tail;
			tail = newNode;
		}
	}

	// default insert after element
	void insertElement(Node* & prevNode, int value) {
		Node* newNode = new Node;
		newNode->data = value;
		newNode->next = NULL;
		newNode->prev = NULL;

		if (prevNode == NULL) {
			return;
		}

		newNode->next = prevNode->next;
		newNode->prev = prevNode;
		prevNode->next = newNode;
		
		if (newNode->next != NULL) {
			newNode->next->prev = newNode;
		}
	}

	void display() {
		while (tail != NULL) {
			cout << tail->data << " ";
			tail = tail->prev;
		}
	}
	void remove(int value) {
		if (head == NULL) {
			return;
		}
		if (head->data == value) {
			delete head;
			head = head->next;
			return;
		}
		if (head->next == NULL) {
			if (head->data == value) {
				delete head;
				head = NULL;
				return;
			}
		}
		Node* temp = head;
		while (temp->next != NULL) {
			if (temp->next->data == value) {
				Node* buffer = temp->next->next;
				delete buffer->next;
				temp->next = buffer;
				return;
			}
		}
	}
	void search(int n) {
		if (head == NULL) {
			cout << "Empty" << endl;
			return;
		}
		else {
			while (head != NULL) {
				if (head->data == n) {
					cout << "Exist" << endl;
				}
				head = head->next;
			}
		}
	}
};

int main() {
	DoublyLinkedList* dll = new DoublyLinkedList();
	dll->insertTail(1);
	dll->insertTail(2);
	dll->insertTail(3);
	dll->insertHead(4);
	//insertElement(head, head->prev, 5);
	dll->display();
	dll->search(3);
	system("pause");
	return 0;
}