/*
	#include<iostream>
	using namespace std;

	struct Node {
		int data;
		Node* next;
	};

	class SinglyLinkedList {
	private:
		Node* head;
		Node* tail;
		static int length;
	public:
		SinglyLinkedList() {
			head = tail = NULL;
		}
		void insertHead(int x) {

			Node* newNode = new Node;
			newNode->data = x;
			newNode->next = NULL;

			// Nếu head=NULL thì newNode = head
			if (head == NULL) {
				head = tail = newNode;
			}
			else {
				newNode->next = head;
				head = newNode;
			}
		}
		void insertTail(int x) {
			++length;
			Node* newNode = new Node;
			newNode->data = x;
			newNode->next = NULL;
			if (tail == NULL) {
				tail = head = newNode;
			}
			else {
				tail->next = newNode;
				tail = newNode;
			}
		}
		Node* getHead() {
			return this->head;
		}
		int getLength() {
			return length;
		}
		void insertBeforeElement(int data) {
			Node* newNode = new Node;
			Node* buffer = new Node;
			newNode->data = data;

			if (head == NULL) {
				cout << "Element not found" << endl;
				return;
			}
			else {
				while (head != NULL)
				{
					if (head->data == data) {		
						newNode->next = head->next;
						newNode->next = head;
						return;
					}
					head = head->next;
				}
			}
		}

		void insertAfterElement(int data, int elem) {

		}

		void search(int data) {
			int count = 0;
			while (head != NULL) {
				++count;
				if (head->data == data) {
					cout << "Index: " << count << endl;
					return;
				}
				head = head->next;
			}
			cout << "NON EXIST" << endl;
		}
		void display() {
			if (head == NULL) {
				cout << "Empty list" << endl;
			}
			else {
				Node* temp = head;
				while (temp != NULL)
				{
					cout << temp->data << " ";
					temp = temp->next;
				}
				cout << endl;
			}
		}

		void remove(int x) {
			// If the head is to be deleted
			if (head->data == x)
			{
				delete head;
				head = head->next;
				return;
			}

			// If there is only one element in the list
			if (head->next == NULL)
			{
				// If the head is to be deleted. Assign null to the head
				if (head->data == x)
				{
					delete head;
					head = NULL;
					return;
				}
				// else print, value not found
				cout << "Value not found!" << endl;
				return;
			}

			// Else loop over the list and search for the node to delete
			Node* temp = head;
			while (temp->next != NULL)
			{
				// When node is found, delete the node and modify the pointers
				if (temp->next->data == x)
				{
					Node* buff = temp->next->next;
					delete buff->next;
					temp->next = buff;
					return;
				}
				temp = temp->next;
			}

			// Else, the value was neve in the list
			cout << "Value not found" << endl;
		}
	};
	int SinglyLinkedList::length = 0;
	int main() {
		SinglyLinkedList* sll = new SinglyLinkedList();
		sll->insertHead(3);
		sll->insertHead(4);
		sll->insertHead(5);
		sll->insertHead(2);
		sll->insertBeforeElement(2);
		sll->display();
		system("pause");
		return 0;
	}
*/